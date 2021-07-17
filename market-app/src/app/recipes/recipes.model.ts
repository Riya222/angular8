export class Recipe{
    public name:string;
    public descption:string;
    public imagepath:string;

    constructor(name:string ,desc:string, imgpath:string){
        this.name = name;
        this.descption = desc;
        this.imagepath = imgpath;
    }
}