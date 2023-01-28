import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  traerPnav(artista:string){
    
    console.log(artista)
   this._router.navigate(['buscar/',artista]) 

  }

}
