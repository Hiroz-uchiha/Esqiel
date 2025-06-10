import React from 'react'

const Tentangku = () => {
  const paragraf = [
    "Halo semuanya!",
    "Perkenalkan, saya Kiel Fernandes seorang Fullstack Developer yang memiliki ketertarikan besar pada dunia teknologi, pengembangan web, dan pengelolaan data. Saya juga lulusan dari Universitas Mikroskil tahun 2025.",
    "Website ini saya buat khusus sebagai media belajar yang interaktif dan mudah diakses, ditujukan bagi siapa saja yang ingin memahami serta menguasai database seperti MySQL dan MongoDB, baik untuk pemula maupun yang ingin memperdalam ilmu.",
    (
      <div className=' lg:text-lg'>
        <p>Apa yang membuat website ini berbeda?</p>
        <p>Di sini, saya tidak hanya menyajikan materi dan teori, tapi juga menyediakan:</p>
        <ul className=' list-disc ml-5'>
          <li>Fitur coding langsung di browser, agar kamu bisa langsung mencoba kode tanpa perlu install software tambahan.</li>
          <li>Latihan-latihan berbasis studi kasus dunia nyata, sehingga kamu bisa belajar sambil memahami bagaimana konsep database diterapkan dalam kehidupan sehari-hari, seperti dalam aplikasi, website, dan sistem informasi.</li>
        </ul>
      </div>
    )
    ,
    "Jika Anda memiliki pertanyaan, memerlukan bantuan, atau ingin berdiskusi, silakan hubungi saya melalui email di esqieldb@gmail.com. Saya selalu terbuka untuk berbagi ilmu dan pengalaman.",
    "Selamat belajar, semoga bermanfaat, dan terus semangat mengeksplorasi dunia teknologi!"
  ]

  return (
    <div className=" text-black p-3 mx-auto w-[90%] flex lg:flex-row flex-col h-screen overflow-y-auto">
      <div className='shrink-0 lg:w-[36%] mx-auto w-[60%] mb-5'>
        <img src="/GAMbark2u.png" alt="Gambar" className=' w-full rounded-lg shadow-md' />
      </div>
      <div className=' space-y-3 lg:ml-4 bg-white p-2 rounded-lg'>
      {paragraf.map((text, index) => ( 
        <div key={index} className=''>
          {typeof text === "string" ? (
            <p className=' lg:text-lg'>{text}</p>
          ) : 
          (
            text
          )}
          
        </div>
      ))}
      </div>
    </div>
  )
}

export default Tentangku
