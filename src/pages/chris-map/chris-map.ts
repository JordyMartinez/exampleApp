import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';//sdsdsdsdsdsdimport { NavController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {
GoogleMaps,
GoogleMap,
GoogleMapsEvent,
LatLng,
CameraPosition,
MarkerOptions,
Marker
} from '@ionic-native/google-maps'; ///ssdsdsdsd


/**
 * Generated class for the ChrisMapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-chris-map',
  templateUrl: 'chris-map.html',
})
export class ChrisMapPage {

constructor(public navCtrl: NavController,private googleMaps: GoogleMaps ,private platform: Platform) { //sdsdsd
   platform.ready().then(() => {
     // Okay, so the platform is ready and our plugins are available.
     // Here you can do any higher level native things you might need.

   });
 }

 ionViewDidLoad() {

       setTimeout(()=>{
          this.loadMap();
       }, 1000)
   }
 // Load map only after view is initialized
 // ngAfterViewInit() {

 //     this.loadMap();

 // }


loadMap() {
 console.log("loading map");
// make sure to create following structure in your view.html file
// and add a height (for example 100%) to it, else the map won't be visible
// <ion-content>
//  <div #map id="map" style="height:100%;"></div>
// </ion-content>

// create a new map by passing HTMLElement
let element: HTMLElement = document.getElementById('map');
// create LatLng object
let pos: LatLng = new LatLng(34.019409, -118.287422);

let map: GoogleMap = this.googleMaps.create(element,{
   camera:{
     'target': pos,
     'zoom':18
   }
});

// listen to MAP_READY event
// You must wait for this event to fire before adding something to the map or modifying it in anyway
map.one(GoogleMapsEvent.MAP_READY).then(
  () => {
    console.log('Map is ready!');
    // Now you can add elements to the map like the marker
     // create new marker
     let markerOptions: MarkerOptions = {
       position: pos,
       title: 'Location'
     };

     map.addMarker(markerOptions)
       .then((marker: Marker) => {
         marker.showInfoWindow();
         console.log("marker")
          marker.addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            // this.navCtrl.push(Page);
           });
       });
       }
);

}
}
