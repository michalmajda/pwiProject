import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
import { useTranslation } from 'react-i18next';
import img1 from './../img/bed-1839184_640.jpg';
import img2 from './../img/technology-792180_640.jpg';
import img3 from './../img/frame-1868498_640.jpg';
import img4 from './../img/garden-5353123_640.jpg'

const GridItems = () => {
    const { t, i18n } = useTranslation();
    const [descriptions, setDescriptions] = useState([])
    useEffect(() => {
        axios.get('https://pwiproject.onrender.com/api/data')
        .then(response => {
            setDescriptions(response.data)
            console.log(response.data);
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });
        console.log('des',descriptions)
    }, [])
    useEffect(() => {
        console.log(i18n.language)
    }, [i18n.language])

  return (
    <div id="section1" style={{padding: `80px`}}>
        <h3 style={{textAlign: `center`}} >{t('Specials')}</h3>
        <Row xs={1} md={2} className="g-4" style={{marginTop: `50px`}} >
            <Col key={1}>
                <Card>
                    <Card.Img variant="top" src={img1} style={{height: `300px`}}/>
                    <Card.Body>
                    <Card.Title>{i18n.language === 'pl' ? descriptions?.[0]?.plTitle : i18n.language === 'en' ? descriptions?.[0]?.enTitle : ''}</Card.Title>
                    <Card.Text>{i18n.language === 'pl' ? descriptions?.[0]?.plDesciption : i18n.language === 'en' ? descriptions?.[0]?.enDescription : ''}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col key={2}>
                <Card>
                    <Card.Img variant="top" src={img2} style={{height: `300px`}}/>
                    <Card.Body>
                    <Card.Title>{i18n.language === 'pl' ? descriptions?.[1]?.plTitle : i18n.language === 'en' ? descriptions?.[1]?.enTitle : ''}</Card.Title>
                    <Card.Text>{i18n.language === 'pl' ? descriptions?.[1]?.plDesciption : i18n.language === 'en' ? descriptions?.[1]?.enDescription : ''}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col key={3}>
                <Card>
                    <Card.Img variant="top" src={img3} style={{height: `300px`}}/>
                    <Card.Body>
                    <Card.Title>{i18n.language === 'pl' ? descriptions?.[2]?.plTitle : i18n.language === 'en' ? descriptions?.[2]?.enTitle : ''}</Card.Title>
                    <Card.Text>{i18n.language === 'pl' ? descriptions?.[2]?.plDesciption : i18n.language === 'en' ? descriptions?.[2]?.enDescription : ''}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col key={4}>
                <Card>
                    <Card.Img variant="top" src={img4} style={{height: `300px`}} />
                    <Card.Body>
                    <Card.Title>{i18n.language === 'pl' ? descriptions?.[3]?.plTitle : i18n.language === 'en' ? descriptions?.[3]?.enTitle : ''}</Card.Title>
                    <Card.Text>{i18n.language === 'pl' ? descriptions?.[3]?.plDesciption : i18n.language === 'en' ? descriptions?.[3]?.enDescription : ''}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
  );
}

export default GridItems;