import { FuseNavigationModelInterface } from '../core/components/navigation/navigation.model';

export class FuseNavigationModel implements FuseNavigationModelInterface {
  public model: any[];

  constructor() {
    this.model = [
      {
        'id': 'applications',
        'title': 'Applications',
        'translate': 'NAV.APPLICATIONS',
        'type': 'group',
        'children': [
          // {
          //   'id': 'distributors',
          //   'title': 'Packing Center',
          //   'translate': 'NAV.Distributors',
          //   'type': 'item',
          //   'icon': 'all_inclusive',
          //   'url': '/apps/distribution/distributors',
          //   'exactMatch': true,
          // },
          {
            'id': 'farmers',
            'title': 'Farmers',
            'translate': 'NAV.Farmers',
            'type': 'item',
            'icon': 'people',
            'url': '/apps/producers/farmers',
            'exactMatch': true
          },
          {
            'id': 'packingCenter',
            'title': 'Packing Center',
            'translate': 'NAV.PACKINGCENTER',
            'type': 'collapse',
            'icon': 'view_compact',
            'children': [
              {
                'id': 'incoming',
                'title': 'Incoming',
                'type': 'item',
                'url': '/apps/packingCenter/incoming',
                'exactMatch': true
              },
              {
                'id': 'outgoing',
                'title': 'Outgoing',
                'type': 'item',
                'url': '/apps/packingCenter/outgoing',
                'exactMatch': true
              }
            ]
          },
          {
            'id': 'tracker',
            'title': 'Tracker',
            'translate': 'NAV.TRACKER',
            'type': 'item',
            'icon': 'local_shipping',
            'url': '/apps/tracker/track',
            'exactMatch': true
          }
        ]
      }
    ];
  }
}
