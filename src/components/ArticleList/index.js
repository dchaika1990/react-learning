import React from 'react';
import Article from '../Article';
import './style.css'

function ArticleList( {articles} ) {
    const articleElements = articles.map( (article, index) =>
            <li className='article-list__li' key = {article.id} >
                <Article article={article} defaultOpen = { index === 0 } />
            </li>
        )
    return (
        <ul>
            {articleElements}
        </ul>
    )
}

export default ArticleList;