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
}

let articles = [
    new Article ("Html", new Date(2019,1,1)),
    new Article ("ASS",new Date(2019,0,1)),
    new Article ("Javascript", new Date(2019,11,1))
];
// console.log(articles);
// articles.sort(Article.compare);
// console.log(articles[0].title);
articles.sort(Article.compareArticle);
console.log(articles);