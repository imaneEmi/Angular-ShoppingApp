export class Product{

  name!: string;
  image!: string;
  description!:string;
  price!:number;
  qteStock!:number;

  static getProducts() :Product[]{
    return [
      {name:'keyboard',image:'https://techcrunch.com/wp-content/uploads/2021/02/keyboard.jpg?w=1390&crop=1'
      ,description:'Keychron K3',price:300,qteStock:10},
      {name:'Mouse',image:'https://resource.logitechg.com/w_1000,c_limit,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/products/gaming/gaming-mice/g305-lightspeed-wireless-gaming-mouse/g304-g305-lightspeed-wireless-gaming-mouse21.png?v=1'
      ,description:'Logitech',price:150,qteStock:0},
      {name:'Desktop Monitor',image:'https://images.samsung.com/is/image/samsung/p6pim/be_fr/ls24r350fzuxen/gallery/be-fr-fhd-monitor-sr35-304338-ls24r350fzuxen-431615839?$2160_1728_PNG$'
      ,description:'SAMSUNG',price:2000,qteStock:4},
      {name:'Laptop',image:'https://www.laptopspirit.fr/wp-content/uploads/new/2019/10/Dell-G3-15-3590-test.jpg'
      ,description:'Dell G3 15',price:9000,qteStock:0},
      {name:'Mouse pad',image:'https://nextlevelpc.ma/wp-content/uploads/2021/05/logitech-g640-gaming-mouse-pad-hand-next-level-pc-gamer-maroc.jpg'
      ,description:'Logitech',price:60,qteStock:0},
    ]
  }
}
