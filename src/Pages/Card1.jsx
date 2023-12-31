import React from "react";
import { Container } from "react-bootstrap";

export default function Card1() {
    return (
        <Container>
            <h1 className="mt-5">Что такое HTML?</h1>

            <p>
                HTML (HyperText Markup Language) представляет язык разметки
                гипертекста, используемый преимущественно для создания
                документов в сети интернет. HTML начал свой путь в начале 90-х
                годов как примитивный язык для создания веб-страниц, и в
                настоящий момент уже трудно представить себе интернет без HTML.
                Подавляющее большинство сайтов так или иначе используют HTML.
            </p>

            <p>
                В 2014 году официально была завершена работа над новым
                стандартом - HTML5, который фактически произвел революцию,
                привнеся в HTML много нового.
            </p>

            <p>Что именно привнес HTML5?</p>

            <ul>
                <li>
                    <p>
                        HTML5 определяет новый алгоритм парсинга для создания
                        структуры DOM
                    </p>
                </li>
                <li>
                    <p>
                        добавление новых элементов и тегов, как например,
                        элементы <code>video</code>, <code>audio</code> и ряд
                        других
                    </p>
                </li>
                <li>
                    <p>
                        переопределение правил и семантики уже существовавших
                        элементов HTML
                    </p>
                </li>
            </ul>

            <p>
                Фактически с добавлением новых функций HTML5 стал не просто
                новой версией языка разметки для создания веб-страниц, но и
                фактически платформой для создания приложений, а область его
                использования вышла далеко за пределы веб-среды интернет: HTML5
                применяется также для создания мобильных приложений под Android,
                iOS, Windows Mobile и даже для создания десктопных приложений
                для обычных компьютеров (в частности, в ОС Windows 8/8.1/10).
            </p>

            <p>
                В итоге, как правило, HTML 5 применяется преимущественно в двух
                значениях:
            </p>

            <ul>
                <li>
                    <p>
                        HTML 5 как обновленный язык разметки гипертекста,
                        некоторое развитие предыдущей версии HTML 4
                    </p>
                </li>
                <li>
                    <p>
                        HTML 5 как мощная платформа для создания веб-приложений,
                        которая включает не только непосредственно язык разметки
                        гипертекста, обновленный HTML, но и язык
                        программирования JavaScript и каскадные таблицы стилей
                        CSS 3.
                    </p>
                </li>
            </ul>

            <p>
                Кто отвечает за развитие HTML5? Этим занимается World Wide Web
                Consortium(сокращенно W3C - Консорциум Всемирной Паутины) -
                независимая международная организация, которая определяет
                стандарт HTML5 в виде спецификаций. Текущую полную спецификацию
                на английском языке можно посмотреть по адресу{" "}
                <a href="https://www.w3.org/TR/html5/" rel="nofollow">
                    https://www.w3.org/TR/html5/
                </a>
                . И надо отметить, что организация продолжает работать над
                HTML5, выпуская обновления к спецификации.
            </p>

            <h3>Поддержка браузерами</h3>

            <p>
                Надо отметить, что между спецификацией HTML5 и использованием
                этой технологии в веб-браузерах всегда был разрыв. Большинство
                браузеров стало внедрять стандарты HTML5 еще до их официальной
                публикации. И к текущему моменту большинство последних версий
                браузеров поддерживают большинство функциональностей HTML5
                (Google Chrome, Firefox, Opera, Internet Explorer 11, Microsoft
                Edge). В то же время многие старые браузеры, как например,
                Internet Explorer 8 и более младшие версии, не поддерживают
                стандарты, а IE 9, 10 поддерживает лишь частично.
            </p>

            <p>
                При этом даже те браузеры, которые в целом поддерживают
                стандарты, могут не поддерживать какие-то отдельные функции. И
                это тоже надо учитывать в работе. Но в целом с поддержкой данной
                технологии довольно хорошая ситуация.
            </p>

            <p>
                Для проверки поддержки HTML5 конкретным браузером можно
                использовать специальный сервис{" "}
                <a href="http://html5test.com" rel="nofollow">
                    http://html5test.com
                </a>
                .
            </p>

            <h3>Необходимые инструменты</h3>

            <p>
                Что потребуется для работы с HTML5? В первую очередь, текстовый
                редактор, чтобы набирать текст веб-страниц на html. На данный
                момент одним из самых простых и наиболее популярных текстовых
                редакторов является Notepad++, который можно найти по адресу{" "}
                <a href="http://notepad-plus-plus.org/" rel="nofollow">
                    http://notepad-plus-plus.org/
                </a>
                . К его преимуществам можно отнести бесплатность, подсветка
                тегов html. В дальнейшем я буду ориентироваться именно на этот
                текстовый редактор.
            </p>

            <p>
                Также стоит упомянуть кроссплатформенный текстовый редактор{" "}
                <a
                    href="https://www.visualstudio.com/ru-ru/products/code-vs.aspx"
                    rel="nofollow"
                >
                    Visual Studio Code
                </a>
                . Данный редактор обладает несколько большими возможностями, чем
                Notepad++, и кроме того, может работать не только в ОС Windows,
                но и в MacOS и в операционных системах на основе Linux.
            </p>

            <p>
                И также потребуется веб-браузер для запуска и проверки
                написанных веб-страничек. В качестве веб-браузера можно взять
                последнюю версию любого из распространенных браузеров - Google
                Chrome, Mozilla Firefox, Microsoft Edge, Opera.
            </p>
        </Container>
    );
}
