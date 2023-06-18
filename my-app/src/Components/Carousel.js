import Carousel from 'react-bootstrap/Carousel';
import img1 from './../img/wall-416060_1280.jpg'
import img2 from './../img/furniture-998265_1920.jpg'
import { useTranslation } from 'react-i18next';
const CarouselItem = () => {
    const { t, i18n } = useTranslation();
    return (
        <Carousel>
            <Carousel.Item interval={3000}>
            <img
                className="d-block w-100"
                style={{maxHeight: `650px`}}
                src={img1}
                alt="Image One"
            />
            <Carousel.Caption>
                <h2>{t('Label1')}</h2>
                <p>{t('Text1')}</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img
                className="d-block w-100"
                style={{maxHeight: `650px`}}
                src={img2}
                alt="Image Two"
            />
            <Carousel.Caption>
                <h2>{t('Label2')}</h2>
                <p>{t('Text2')}</p>
            </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
    );
}

export default CarouselItem;