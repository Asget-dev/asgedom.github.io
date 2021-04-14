class Article{
    constructor(title,date){
        this.title = title;
        this.date = date;
    }
    static compare(articleA, articleB){
        return articleA.date - articleB.date;
    }
    static compareArticle(articleA,articleB){
        return articleA.title.localeCompare(articleB.title);
    }
    getTitle(){
        return this.title;
    }
}


  let articleA =  new Article ("Html", new Date(2019,1,1));
  let articleB =  new Article ("ASS",new Date(2019,0,1));

  console.log(Article.compare(articleA,articleB));

  console.log(articleA.getTitle())
