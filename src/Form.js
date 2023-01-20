import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import "./App.css";


const schema = yup.object().shape({
    isim: yup
        .string()
        .required("İsim sayı değeri içeremez")
        .matches(/^[aA-zZ\s]+$/, "İsim sayı değeri içeremez")
        .min(2, 'İsim en az 2 karakter olmalıdır')
        .max(15, 'İsim maksimum 15 karakter içerebilir'),

    pizzakenar: yup
        .mixed()
        .oneOf(["Normal", "Peynirli"], 'Pizza kenar seçiminizi yapınız'),

    boyut: yup
        .mixed()
        .oneOf(["Normal", "Küçük", "Büyük", "Ekstra Büyük"], 'Pizza boyutu seçiminizi yapınız'),


    malzeme1: yup
        .string()
        .required("Sos seçiminizi yapınız"),

    mantar: yup
        .bool(),


    biber: yup
        .bool(),

    sosis: yup
        .bool(),

    salam: yup
        .bool(),

    sucuk: yup
        .bool(),

    mısır: yup
        .bool(),

    pastırma: yup
        .bool(),

    kavurma: yup
        .bool(),

    tavuk: yup
        .bool(),

    zeytin: yup
        .bool(),

    ananas: yup
        .bool(),


    özel: yup
        .string()

});


const Form = (props) => {
    const [formData, setFormData] = useState({
        isim: '',
        boyut: '',
        malzeme1: '',
        mantar: false,
        biber: false,
        sosis: false,
        salam: false,
        sucuk: false,
        mısır: false,
        pizzakenar: false,
        ananas: false,
        kavurma: false,
        pastırma: false,
        tavuk: false,
        zeytin: false,
        özel: '',
    });


    const [disabled, setDisabled] = useState(true);


    const [errorMessages, setErrorMessages] = useState({
        isim: '',
        boyut: '',
        mantar: "",
        biber: "",
        sosis: "",
        salam: "",
        sucuk: "",
        mısır: "",
        ananas: "",
        kavurma: "",
        pastırma: "",
        tavuk: "",
        zeytin: "",
        pizzakenar: '',
        özel: '',
    });





    useEffect(() => {
        schema.isValid(formData).then((valid) => setDisabled(!valid));
    }, [formData]);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Tebrikler! Pizza'nız yola çıktı");


        axios.post("https://reqres.in/api/orders", formData).then((res) => {
            console.log(res.data);

            props.history.push({
                pathname: '/siparis',
                formData
            });
        })
    };


    const checkError = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then(() => setErrorMessages({ ...errorMessages, [name]: "" }))
            .catch((err) =>
                setErrorMessages({ ...errorMessages, [name]: err.errors[0] })
            );
    };

    const handleChange = (event) => {
        const { name, type, checked, value } = event.target;

        const valueToUse = type === "checkbox" ? checked : value;




        checkError(name, valueToUse);



        setFormData({
            ...formData,
            [name]: valueToUse
        });
    };


    return (

        <div>
            <h1>Pizzamızı Oluşturalım!</h1>
            <form id="pizza-form" onSubmit={handleSubmit}>
                <div id='pizzanick'>
                    <input
                        type="text"
                        name="isim"
                        id="name-input"
                        placeholder="Pizzana isim ver!"
                        value={formData.isim}
                        onChange={handleChange}
                    />
                    <p className="errormesajları">{errorMessages.isim}</p>
                </div>

                <div className='herbirbaslik'>
                    <label>
                        <h2> Pizza Boyutunu Seçiniz </h2>
                        <select
                            id="size-dropdown"
                            onChange={handleChange}
                            value={formData.boyut}
                            name="boyut">
                            <option>Pizza Boyu Seçiniz</option>
                            <option>Küçük</option>
                            <option>Normal</option>
                            <option>Büyük</option>
                            <option>Ekstra Büyük</option>
                        </select>
                    </label>
                    <p className="errormesajları">{errorMessages.boyut}</p>
                </div>



                <div className='herbirbaslik'>


                    <h2 >Pizza sosunuzu seçiniz</h2>
                    <input onChange={handleChange} type="radio" id='1' name="malzeme1" value="Barbekü" />
                    <label>Barbekü Sos</label>
                    <input onChange={handleChange} type="radio" id='2' name="malzeme1" value="Sarımsak" />
                    <label>Sarımsaklı Ranch Sos</label>
                    <input onChange={handleChange} type="radio" id='3' name="malzeme1" value="Acı" />
                    <label>Acı Sos</label>
                    <input onChange={handleChange} type="radio"  id='4' name="malzeme1" value="Bol Domates Sos" />
                    <label>Bol Domates Sos</label>
                    <p className="errormesajları">{errorMessages.malzeme1}</p>

                </div>





                <div className='herbirbaslik' id="malzeme2">


                    <h2> Pizza malzemelerinizi seçiniz</h2>
                    <label><input onChange={handleChange} type="checkbox" id="mantar" name="mantar" checked={formData.mantar} /> Mantar </label>
                    <label><input onChange={handleChange} type="checkbox" id="biber"name="biber" checked={formData.biber} /> Biber </label>
                    <label><input onChange={handleChange} type="checkbox"  id="sosis"name="sosis" checked={formData.sosis} /> Sosis </label>
                    <label><input onChange={handleChange} type="checkbox" id="mısır"name="mısır" checked={formData.mısır} /> Mısır </label>
                    <label><input onChange={handleChange} type="checkbox" id="salam" name="salam" checked={formData.salam} /> Salam </label>
                    <label><input onChange={handleChange} type="checkbox" id="sucuk" name="sucuk" checked={formData.sucuk} /> Sucuk </label> <br></br>
                    <label><input onChange={handleChange} type="checkbox" id="ananas" name="ananas" checked={formData.ananas} /> Ananas </label>
                    <label><input onChange={handleChange} type="checkbox" id="kavurma" name="kavurma" checked={formData.kavurma} /> Kavurma </label>
                    <label><input onChange={handleChange} type="checkbox" id="tavuk" name="tavuk" checked={formData.tavuk} /> Tavuk </label>
                    <label><input onChange={handleChange} type="checkbox" id="zeytin"name="zeytin" checked={formData.zeytin} /> Zeytin </label>
                    <label><input onChange={handleChange} type="checkbox" id="pastırma" name="pastırma" checked={formData.pastırma} /> Pastırma </label>

                    <p className="errormesajları">{errorMessages.malzeme2}</p>



                </div>




                <div className='herbirbaslik'>

                    <h2>Pizza Kenar Seçimi</h2>

                    <input onChange={handleChange} type="radio" name="pizzakenar" value="Normal" />
                    <label>Normal Kenar</label>
                    <input onChange={handleChange} type="radio" name="pizzakenar" value="Peynirli" />
                    <label>Peynirli Kenar</label>

                    <p className="errormesajları">{errorMessages.pizzakenar}</p>





                </div>



                <div className='herbirbaslik'>

                    <label>
                        <h2> Ürün Notu</h2>
                        <input
                            type="text"
                            name="özel"
                            id="special-text"
                            onChange={handleChange}
                            value={formData.özel}
                            placeholder="Ürün Notu"
                        />
                    </label>
                    <p className="errormesajları">{errorMessages.özel}</p>

                </div>

                <br></br>




                <input type="submit" id="order-button" value="Siparişlere Ekle" disabled={disabled} />











            </form>
        </div>


    );
}


export default Form;

