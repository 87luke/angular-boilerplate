import {
  ChangeDetectionStrategy,
  Component, OnInit,
  ViewEncapsulation,
  ChangeDetectorRef,
  ViewChild
} from '@angular/core';
import {StateService} from '@uirouter/core/lib';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-page-home',
  encapsulation: ViewEncapsulation.None, // hack to get the styles to apply locally
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  public roomId: number;

  public lat: number = 0;

  public lng: number = 0;

  public places: any[] = [];

  refreshCoords: Subject<any> = new Subject();
  refreshPlaces: Subject<any> = new Subject();
  /**
   * @hidden
   */
  coordsSubscription: Subscription;
  placesSubscription: Subscription;

  constructor(
    private $state: StateService,
    private cdr: ChangeDetectorRef
  ) {
    this.roomId = 10;
  }

  ngOnInit(): void {
    this.getCurrentPosition();
    this.coordsSubscription = this.refreshCoords.subscribe(() => {
      this.cdr.detectChanges();
    });
    this.placesSubscription = this.refreshPlaces.subscribe(() => {
      this.cdr.detectChanges();
    });
  }

  getCurrentPosition(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      const mapProp = {
        center: new google.maps.LatLng(this.lat, this.lng),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      const infowindow = new google.maps.InfoWindow();
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
      const service = new google.maps.places.PlacesService(this.map);
      service.nearbySearch({
        location: new google.maps.LatLng(this.lat, this.lng),
        radius: 500,
        types: []
      }, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          this.places = results;
          for (let i = 0; i < results.length; i++) {
            const placeLoc = results[i].geometry.location;
            const marker = new google.maps.Marker({
              map: this.map,
              position: results[i].geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent(results[i].name);
              infowindow.open(this.map, this);
            });
          }
          this.refreshPlaces.next();
        }
      });
      this.refreshCoords.next();
    }, (error) => {
      console.log(error);
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }

  setRoom(roomId: number): void {
    this.roomId = roomId;
    this.$state.go('room', {roomId: this.roomId});
  }
}
