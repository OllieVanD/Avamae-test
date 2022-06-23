import styles from '../assets/css/styles.module.css'
import React, { useEffect, useState } from 'react'
import StockImage from '../img/stockPic1.jpg'
import axios from 'axios'

const Home = () => {
  const [items, setItems] = useState([])
  let title; let subtitle; let background = 'Not Loaded'
  const randomizer = Math.floor(Math.random() * 3)

  useEffect(() => {
    axios.get('https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details')
      .then(res => setItems(res.data))
  }, [])

  if (items.length !== 0) {
    title = items.Details[randomizer].Title
    subtitle = items.Details[randomizer].Subtitle
    background = items.Details[randomizer].ImageUrl
  }

  return (
      <div className={styles.mainText}>
         <div className={styles.Banner} style={{ backgroundImage: `url(${background})` }}>

            <p className={styles.title}> {title} </p>
        </div>
        <div className={styles.para1}>
        <div className={styles.column}>
          <p className = {styles.subtitle}>{subtitle}</p>
          <p>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
         aliqua. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Sapien eget mi proin sed
          libero enim sed faucibus. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Sit amet
           aliquam id diam maecenas ultricies mi eget mauris. A scelerisque purus semper eget. Id interdum
            velit laoreet id donec ultrices tincidunt arcu non. Urna duis convallis convallis tellus id.
             Consequat mauris nunc congue nisi vitae. Etiam erat velit scelerisque in dictum non consectetur a erat.
              Lectus quam id leo in vitae turpis.
              </p>
        </div>
        <img src ={StockImage} className={styles.stockImage}/>

        </div>
        <div className={styles.para2}>
          <div className={styles.para2Text}>
        <p className={styles.column}>
              Vel eros donec ac odio tempor orci. Nunc lobortis mattis aliquam
               faucibus purus in massa. Porttitor eget dolor morbi non arcu risus quis varius. Nulla malesuada
               pellentesque elit eget gravida cum. Nibh tellus molestie nunc non blandit. Adipiscing elit duis
               tristique sollicitudin nibh sit amet commodo nulla. Gravida rutrum quisque non tellus orci ac auctor
                augue. Lectus quam id leo in vitae turpis. Ac auctor augue mauris augue neque gravida.
                Proin mattis efficitur sollicitudin. Nulla facilisi. Praesent rhoncus lorem efficitur, porta purus
                sit amet, lacinia augue. Fusce nunc neque, semper tempor purus vel, elementum cursus augue. Integer
                quis lorem sed massa scelerisque pulvinar vel eget enim. Donec viverra ultricies diam ut malesuada.
                Nulla vulputate dapibus nibh, at laoreet tortor ultrices eu. Mauris mattis aliquam ligula sit amet
                accumsan. Donec ornare placerat bibendum. Integer lacinia eros id velit molestie, nec convallis lacus
                 posuere. Integer placerat et enim sit amet lacinia. Proin et feugiat sem. In egestas lacinia interdum.
                 Phasellus nec nisi sit amet metus lacinia consequat vitae ac diam. Sed velit tortor, sagittis a mi vitae,
                  aliquet ultrices nunc. Maecenas eleifend leo et erat eleifend, eget consequat elit dapibus. In dapibus
                  Etiam posuere ipsum quis feugiat luctus. Nunc viverra eu dui ut interdum. Maecenas et turpis et lorem
                  placerat ornare.Donec tincidunt pharetra turpis. Sed lobortis lacus sed luctus dapibus. Nam lacus mi,

                  </p>
                  <p className={styles.column}>suscipit vitae massa a, mattis pretium ligula.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus varius eu elit quis cursus. Nunc non tristique purus. Maecenas aliquam lectus vel lacus pulvinar,
                   eget mollis nibh imperdiet. Curabitur vestibulum a lectus non semper. Praesent semper metus non magna
                   fringilla mattis. Curabitur cursus eu turpis sed eleifend. Nullam at congue enim. Praesent efficitur
                   urna at nunc porta congue. Fusce fermentum ante mauris, vel fringilla tellus faucibus eget. Curabitur
                   cursus, sapien at aliquam cursus, est tellus rutrum sem, et congue nunc nibh eu risus. Ut eget tempor
                   sem, at condimentum justo. Donec semper ligula lorem, non ornare nisl lacinia ut. In hac habitasse platea
                   dictumst. Praesent dui enim, faucibus at tellus congue, eleifend porta tellus.Suspendisse a magna imperdiet,
                    vehicula nisi id, elementum nulla. Donec aliquam dui at dignissim laoreet. Sed a mauris vel elit elementum
                     dapibus in quis felis. Donec ante diam, tristique sit amet lobortis nec, gravida sed justo. Vivamus
                     consectetur ex at leo ultrices, vel cursus urna vulputate. Pellentesque eget faucibus leo. Nullam placerat
                     sagittis dui, sed fermentum mauris sollicitudin vitae. Quisque sed scelerisque purus.Aliquam auctor velit
                      quis metus posuere, at vestibulum lorem rhoncus. Quisque lectus diam, pulvinar vitae mollis vitae, congue
                      sed purus. Duis dictum mattis nunc, sit amet tincidunt est mattis eu. Suspendisse potenti. Nullam at libero
                       a odio consequat dictum. Sed hendrerit consectetur efficitur. Integer sit amet faucibus risus, ac ornare leo.

                           </p>

        </div>
        </div>
        <div className={styles.para1}>
        <p className={styles.column}>
                       Integer accumsan ex a massa commodo, eget mattis arcu faucibus. Nunc in lorem pulvinar, tempus dui eu, interdum
                       odio. Maecenas vel dapibus dui. Morbi sem nisi, elementum non elit eu, sagittis fermentum massa. Suspendisse
                        porttitor pharetra metus pharetra porttitor. Suspendisse semper non sem et porta. Vestibulum ante ipsum primis
                        in faucibus orci luctus et ultrices posuere cubilia curae; Proin quam nisi, rutrum ac dolor at, molestie euismod
                        dolor. Duis quis elit erat.Integer nec lacinia orci. In hac habitasse platea dictumst. Quisque porttitor magna
                        scelerisque aliquam cursus. Donec ultricies, est nec commodo malesuada, arcu sem ultrices nunc, dignissim ultrices
                         mi odio eu neque. Suspendisse at condimentum lorem. Fusce nec est faucibus, condimentum arcu nec, malesuada magna.
                          Mauris sit amet consequat ipsum, a tempus mi. Donec dictum tempor scelerisque. Nunc dignissim, sem non fermentum
                          lacinia, mauris sem sagittis odio, in maximus quam urna eleifend purus. Curabitur rhoncus justo eu egestas rutrum.
                           Phasellus sed maximus neque, fermentum sagittis mauris.
                           </p>
        </div>

        <br /><br />
      </div>
  )
}

export default Home
