import React, { useState } from 'react';

function PizzaOrderForm() {
  const [size, setSize] = useState('Orta');
  const [hamur, setHamur] = useState('Hamur Kalınlığı');
  const [extras, setExtras] = useState([]);
  const [miktar, setMiktar] = useState(1);

  const handleExtraChange = (e) => {
    const value = e.target.value;
    setExtras((prevExtras) =>
      prevExtras.includes(value)
        ? prevExtras.filter((extra) => extra !== value)
        : [...prevExtras, value]
    );
  };

  const handleMiktarChange = (type) => {
    setMiktar((prevMiktar) =>
      type === 'increase' ? prevMiktar + 1 : prevMiktar - 1
    );
  };

  return (
    <div className="container">
      <h2 className="position">Position Absolute Acı Pizza</h2>
      <p className="fiyat">85.50₺</p>
      <p className="text">
        Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre...Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.Pizza, domates,peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.Küçük bir pizzaya bazen pizzetta denir.
      </p>

      <div className="boyut">
        <label className="boyutsecim">Boyut Seç *</label>
        <div>
          <input type="radio" name="size" value="Küçük" onChange={() => setSize('Küçük')} /> Küçük
          <input type="radio" name="size" value="Orta" defaultChecked onChange={() => setSize('Orta')} /> Orta
          <input type="radio" name="size" value="Büyük" onChange={() => setSize('Büyük')} /> Büyük
        </div>
      </div>

      <div className="hmr">
        <label className="hmrsecim">Hamur Seç *</label>
        <select value={hamur} onChange={(e) => setHamur(e.target.value)}>
          <option disabled>Hamur Kalınlığı</option>
          <option>İnce</option>
          <option>Normal</option>
          <option>Kalın</option>
        </select>
      </div>

      <div className="ek">
        <label className="ekmalzeme">Ek Malzemeler</label>
        <div>
          <input type="checkbox" value="Mısır" onChange={handleExtraChange} /> Mısır
          <input type="checkbox" value="Sucuk" onChange={handleExtraChange} /> Sucuk
          <input type="checkbox" value="Jalapeno" onChange={handleExtraChange} /> Jalapeno
          <input type="checkbox" value="Sosis" onChange={handleExtraChange} /> Sosis
          <input type="checkbox" value="Soğan" onChange={handleExtraChange} /> Soğan
          <input type="checkbox" value="Tavuk Izgara" onChange={handleExtraChange} /> Tavuk Izgara
          <input type="checkbox" value="Kanada Jambonu" onChange={handleExtraChange} /> Kanada Jambonu
          <input type="checkbox" value="Pepperoni" onChange={handleExtraChange} /> Pepperoni
          <input type="checkbox" value="Domates" onChange={handleExtraChange} /> Domates
          <input type="checkbox" value="Sarımsak" onChange={handleExtraChange} /> Sarımsak
          <input type="checkbox" value="Biber" onChange={handleExtraChange} /> Biber
          <input type="checkbox" value="Ananas" onChange={handleExtraChange} /> Ananas
          <input type="checkbox" value="Kabak" onChange={handleExtraChange} /> Kabak
        </div>
      </div>

      <div className="siparisNotu">
        <label className="siparisNotuBaslik">Sipariş Notu</label>
        <textarea className="not" placeholder="Siparişine eklemek istediğin bir not var mı?"></textarea>
      </div>

      <div className="butonlar">
        <button className="eksiButon" onClick={() => handleMiktarChange('decrease')}>-</button>
        <span className="miktar">{miktar}</span>
        <button className="artiButon" onClick={() => handleMiktarChange('increase')}>+</button>
      </div>

      <div className="text-right">
        <button className="siparisVer">Siparişi Ver</button>
      </div>
    </div>
  );
}

export default PizzaOrderForm;