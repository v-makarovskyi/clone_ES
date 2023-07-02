import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import Publication from '../components/Publication'
import { articles } from '../data/articles'
import { news } from '../data/news'

export default function SinglePublication() {
  const {segment, id} = useParams()
  
  const article = articles.filter(a => a.id === id)
  const singleNew = news.filter(n => n.id === id)


  return (
    <Container className='singleArticle p-0'>
      <Row>
        {
          segment === 'articles' 
          ?  <Publication item={article[0]} big={true} list={false} segment={segment} /> 
          : <Publication item={singleNew[0]} big={true} list={false} segment={segment} /> 
        }
      </Row> 
    </Container>
  )
}
