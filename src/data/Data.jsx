import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import banner1 from "../assets/images/banner1.jpg"
import banner2 from "../assets/images/banner2.jpg"
import banner3 from "../assets/images/banner3.jpg"

export const nav=[
    {
        Path:"/",
        text:"Home"
    },
    {
        Path:"/product",
        text:"Product"
    },
    {
        Path:"/about",
        text:"About"
    },


    {
        Path:"/contact",
        text:"contact"
    },
]

export const aweicon=[
    {
        icon:<FontAwesomeIcon className="mr-4 " icon="heart"/>
    },
    {
        icon:<FontAwesomeIcon className="mr-4 " icon="shopping-cart"/>
    },
    {
        icon:<FontAwesomeIcon className="mr-4 " icon={['fab','facebook']}/>
    },
    {
        icon:<FontAwesomeIcon className="mr-4 " icon={['fab','instagram']}/>
    },
    {
        icon:<FontAwesomeIcon className="mr-4 " icon={['fab','youtube']}/>
    },
    {
        icon:<FontAwesomeIcon className="mr-4 " icon={['fab','twitter']}/>
    },
   
   
]

export const sliderdata=[
    {
        img:banner1,
        title:"Nature Beauty",
    
    },
    {
        img:banner2,
        title:"Nature Beauty",
    
    },
    {
        img:banner3,
        title:"Nature Beauty",
    
    },
]
    
export const category=[

]

export const product=[
    {
        id:1,
        img:"https://source.unsplash.com/800x600/?nature,water",
        name:"Brand 1",
        price:100,
    }

]
export const brands=[
{
    brands:""
}
]

export const footer =[
    {
        id: 1,
        header:"shop",
        title:[
            {
                subtitle:"new arrivals"
            },
            {
                subtitle:"sales & Special Offers"
            },
            {
                subtitle:"living room"
            },
            {
                subtitle:"furniture decor"
            },
            {
                subtitle:"lamp & lighting"
            },
            {
                subtitle:"sofa & chair"
            },
            {
                subtitle:"home & kitchen"
            },
        ],
    },
    {
        id: 2,
        header:"information",
        title:[
            {
                subtitle:"About us"
            },
            {
                subtitle:"Customer Services"
            },
            {
                subtitle:"blog"
            },
            {
                subtitle:"page 404"
            },
            {
                subtitle:"sizing guide"
            },
            {
                subtitle:"FAQS"
            },
            {
                subtitle:"contect us"
            },
        ],
    },{
        id: 3,
        header:"order",
        title:[
            {
                subtitle:"my account"
            },
            {
                subtitle:"view bag"
            },
           
            {
                subtitle:"Privacy Policy"
            },
            {
                subtitle:"Cookie Policy"
            },
          
        ],
    },
];
