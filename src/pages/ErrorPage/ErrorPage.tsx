import React from "react";
import Style from './ErrorPage.module.css';

const ErrorPage = () => {
    return(
        <>
            <section className={Style.error__section_bg}>
                <div>
                    <div>
                        <p>Ошибка</p>
                        <h1>404</h1>
                        <p>К сожалению страница не найдена, скорее всего она была удалена.
                            Рекомендуем вернуться на главную.
                        </p>
                        <button>Главная</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export {ErrorPage};