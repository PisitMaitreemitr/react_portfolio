import React from 'react'
import styles from './Testtimonials.module.css'

function Testtimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}></h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
            </p>
            <img src="https://images.unsplash.com/photo-1482961674540-0b0e8363a005?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <h4>John Doe</h4>
            <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
            </p>
            <img src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <h4>Jane Doe</h4>
            <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
            </p>
            <img src="https://images.unsplash.com/photo-1584940120743-8981ca35b012?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <h4>Joe Doe</h4>
            <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Testtimonials
