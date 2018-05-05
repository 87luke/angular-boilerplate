import { UIRouter, Category } from '@uirouter/core';
import { Visualizer } from '@uirouter/visualizer';
import { environment } from '../../environments/environment';

import { requiresAuthHook } from '../hook/auth.hook';

export function routerConfigFn(router: UIRouter) {
  const transitionService = router.transitionService;
  requiresAuthHook(transitionService);
  if (environment.debug) {
    router.trace.enable(Category.TRANSITION);
    router.plugin(Visualizer);
  }
}
