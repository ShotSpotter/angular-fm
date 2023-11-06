import {CardData} from '../app/common/components/card.component';

export const ROUTING_PLATFORM_LIST: CardData[] = [
  {
    'id': 'ShotSpotter',
    'img': '../assets/img/ss.svg',
    'iconColor': 'primary',
  }, {
    'id': 'CrimeTracer',
    'img': '../assets/img/ct.svg',
    'iconColor': 'primary'
  }, {
    'id': 'CaseBuilder',
    'img': '../assets/img/cb.svg',
    'iconColor': 'primary'
  }, {
    'id': 'ResourceRouter',
    'img': '../assets/img/rr.svg',
    'iconColor': 'primary'
  }
]

export const ROUTING_PLATFORM_DETAILS: CardData[] = [{
  'id': 'ShotSpotter',
  'img': '../assets/img/ss.svg',
  'iconColor': 'primary',
  'title': 'Save Lives and Find Critical Evidence with The Leading Gunshot Detection System',
  'content': 'Many agencies are integrating (or have integrated) ShotSpotter gunshot alert data with other platforms using our push API (Notification API), ' +
    'empowering law enforcement agencies across the county to achieve digital transformation. Our gunshot alert data can be integrated with license plate readers, ' +
    'RMS, CAD, predictive policing software, crime dashboards, access controls, geospatial software, and drones.',
  extra: {
    stats: [
      {
        title: 'Reporting',
        names: ['without ShotSpotter < 12% of gunfire reported', 'with ShotSpotter > 90% of gunfire reported']
      },
      {
        title: 'Time to Dispatch',
        names: ['without ShotSpotter avg. of 4.5 min', 'with ShotSpotter < 60 sec']
      },
      {
        title: 'Crime Scene Location',
        names: ['without ShotSpotter > 780 ft away from shots fired', 'with ShotSpotter < 82 ft away from shots fired']
      },
      {
        title: 'Shell Casing Collection',
        names: ['without ShotSpotter 50% found', 'with ShotSpotter 89% found']
      },
      {
        title: 'Victims Transport Time',
        names: ['without ShotSpotter 10.3 min on avg (< 5 miles)', 'with ShotSpotter 6.8 min on avg (< 5 miles)']
      }
    ]
  }
}]
