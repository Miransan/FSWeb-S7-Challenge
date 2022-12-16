import React from 'react'
import { Link } from "react-router-dom";
import "./App.css";

const Order = (props) => {

    const { isim, boyut, malzeme1, malzeme2, pizzakenar, özel , mantar ,biber ,sosis ,salam ,sucuk ,mısır ,ananas ,kavurma ,pastırma ,tavuk ,zeytin} =
        (props.location && props.location.formData) || {};


 


    return (

        <div id='ordersayfasi'>
            <h1 id='orderustbaslık'> Tebrikler! Pizza'nız yola çıktı <br></br> Siparişiniz 30-45 dakika içerisinde teslim edilecektir </h1>

            <h2 className='herbirbaslik'><p>Sipariş detaylarınız </p>
                <p className='siparisyazilar'>Pizzanızın İsmi:<br></br> <em>{isim}</em></p> 
                <p className='siparisyazilar'>Pizzanızın Boyutu: <br></br> <em>{boyut}</em> </p> 
                <p className='siparisyazilar'>Pizza Sosunuz:<br></br> <em>{malzeme1}</em> </p> 
                <p className='siparisyazilar'> Pizza Malzemeleriniz:  <br></br>
                <em>{mantar === true ? "Mantar " : null } { " " }</em>
                <em>{biber === true ? " Biber " : null } { " " }</em>
                <em>{sosis === true ? " Sosis " : null } { " " }</em>
                <em>{salam === true ? " Salam " : null } { " " }</em>
                <em>{sucuk === true ? " Sucuk " : null } { " " }</em>
                <em>{mısır === true ? " Mısır " : null } { " " }</em>
                <em>{ananas === true ? " Ananas " : null } { " " }</em>
                <em>{pastırma === true ? " Pastırma " : null } { " " }</em>
                <em> {kavurma === true ? " Kavurma " : null }</em>
                <em>{tavuk === true ? " Tavuk " : null }</em>
                <em>{zeytin === true ? " Zeytin " : null } </em></p> 
                <p className='siparisyazilar'>Kenar Seçiminiz: <br></br><em>{pizzakenar} </em></p> 
                <p className='siparisyazilar'>Ürün Notu:<br></br><em>{özel}</em> </p>

            </h2>


            <Link to="/" id='siparisiverdimbuttonu' >Tekrar sipariş ver!</Link>





        </div>

    )
}

export default Order;

