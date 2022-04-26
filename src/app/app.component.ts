import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    currentPage = 0;
    images = [
        {
            title: "At the Beach"
            , url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Tasty Burger"
            , url: "https://media.istockphoto.com/photos/steakhouse-double-bacon-cheeseburger-picture-id617759204?b=1&k=20&m=617759204&s=170667a&w=0&h=1P9GZRYzwihWvzZGpbYLPJx_xMrv8dbN0z423CpL_N4="
        },
        {
            title: "Snowy Mountain"
            , url: "https://media.istockphoto.com/photos/on-the-top-of-the-swiss-alps-mountain-range-picture-id1159636118?b=1&k=20&m=1159636118&s=170667a&w=0&h=tIoJvO8qGFabYUA-QMLiea6XzokEP2YNRQ-26E_hlgY="
        },
        {
            title: "Cold Beer"
            , url: "https://images.unsplash.com/photo-1583744513233-4721ae67a891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjBiZWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "At the Beach"
            , url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Tasty Burger"
            , url: "https://media.istockphoto.com/photos/steakhouse-double-bacon-cheeseburger-picture-id617759204?b=1&k=20&m=617759204&s=170667a&w=0&h=1P9GZRYzwihWvzZGpbYLPJx_xMrv8dbN0z423CpL_N4="
        },
        {
            title: "Snowy Mountain"
            , url: "https://media.istockphoto.com/photos/on-the-top-of-the-swiss-alps-mountain-range-picture-id1159636118?b=1&k=20&m=1159636118&s=170667a&w=0&h=tIoJvO8qGFabYUA-QMLiea6XzokEP2YNRQ-26E_hlgY="
        },
        {
            title: "Cold Beer"
            , url: "https://images.unsplash.com/photo-1583744513233-4721ae67a891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjBiZWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "At the Beach"
            , url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Tasty Burger"
            , url: "https://media.istockphoto.com/photos/steakhouse-double-bacon-cheeseburger-picture-id617759204?b=1&k=20&m=617759204&s=170667a&w=0&h=1P9GZRYzwihWvzZGpbYLPJx_xMrv8dbN0z423CpL_N4="
        },
        {
            title: "Snowy Mountain"
            , url: "https://media.istockphoto.com/photos/on-the-top-of-the-swiss-alps-mountain-range-picture-id1159636118?b=1&k=20&m=1159636118&s=170667a&w=0&h=tIoJvO8qGFabYUA-QMLiea6XzokEP2YNRQ-26E_hlgY="
        },
        {
            title: "Cold Beer"
            , url: "https://images.unsplash.com/photo-1583744513233-4721ae67a891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjBiZWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "At the Beach"
            , url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Tasty Burger"
            , url: "https://media.istockphoto.com/photos/steakhouse-double-bacon-cheeseburger-picture-id617759204?b=1&k=20&m=617759204&s=170667a&w=0&h=1P9GZRYzwihWvzZGpbYLPJx_xMrv8dbN0z423CpL_N4="
        },
        {
            title: "Snowy Mountain"
            , url: "https://media.istockphoto.com/photos/on-the-top-of-the-swiss-alps-mountain-range-picture-id1159636118?b=1&k=20&m=1159636118&s=170667a&w=0&h=tIoJvO8qGFabYUA-QMLiea6XzokEP2YNRQ-26E_hlgY="
        },
        {
            title: "Cold Beer"
            , url: "https://images.unsplash.com/photo-1583744513233-4721ae67a891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjBiZWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "At the Beach"
            , url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Tasty Burger"
            , url: "https://media.istockphoto.com/photos/steakhouse-double-bacon-cheeseburger-picture-id617759204?b=1&k=20&m=617759204&s=170667a&w=0&h=1P9GZRYzwihWvzZGpbYLPJx_xMrv8dbN0z423CpL_N4="
        },
        {
            title: "Snowy Mountain"
            , url: "https://media.istockphoto.com/photos/on-the-top-of-the-swiss-alps-mountain-range-picture-id1159636118?b=1&k=20&m=1159636118&s=170667a&w=0&h=tIoJvO8qGFabYUA-QMLiea6XzokEP2YNRQ-26E_hlgY="
        },
        {
            title: "Cold Beer"
            , url: "https://images.unsplash.com/photo-1583744513233-4721ae67a891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjBiZWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "At the Beach"
            , url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Tasty Burger"
            , url: "https://media.istockphoto.com/photos/steakhouse-double-bacon-cheeseburger-picture-id617759204?b=1&k=20&m=617759204&s=170667a&w=0&h=1P9GZRYzwihWvzZGpbYLPJx_xMrv8dbN0z423CpL_N4="
        },
        {
            title: "Snowy Mountain"
            , url: "https://media.istockphoto.com/photos/on-the-top-of-the-swiss-alps-mountain-range-picture-id1159636118?b=1&k=20&m=1159636118&s=170667a&w=0&h=tIoJvO8qGFabYUA-QMLiea6XzokEP2YNRQ-26E_hlgY="
        },
        {
            title: "Cold Beer"
            , url: "https://images.unsplash.com/photo-1583744513233-4721ae67a891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjBiZWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
    ]

    checkWindowIndex(index: number) {
        const limit = 5;
    
        const lowerBound = Math.floor(this.currentPage / limit) * limit;
        const upperBound = lowerBound + limit;
    
        return lowerBound <= index && index < upperBound;
    }
}
