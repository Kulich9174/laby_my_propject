import Button from './Button_connection';

interface MainPageProps {
    menuButtonState: boolean;
}

const MainPage: React.FC<MainPageProps> = ({ menuButtonState}) => {
    
    return (
        <>
        <div className={menuButtonState ? 'hidden':"bg-plane" }>
                <p className="uppercase">Flower Fracht Karaganda</p>
                <h1>Авиаперевозка цветов</h1>
                <p>Занимаемся только АВИА перевозкой свеже срезанных цветов и растений из Эквадора,
Кении, Колумбии, Чили, Голландии, Израиля до конечного заказчика.</p>
                <p>Максимальный срок достовки товара - 7 дней от заказа</p>
                <Button/>
                <div className="grid">
                    <img></img>
                    <svg></svg>
                    <img></img>
                    <img></img>
                </div>
        </div>
        </>
    )
}
export default MainPage;
