import styles from '../assets/css/styles.module.css'
import React from 'react'

const Footer = () => {
  return (
        <div className ={styles.footer}>
          <div className={styles.column}>
            <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat,
             lorem a faucibus varius, ante eros suscipit augue, iaculis tristique sapien
              eros ut mi. Quisque vulputate diam leo, ut tempor augue lobortis ac.
            </p>
            </div>
            <div className={styles.column}>
            <p>
                Curabitur quis iaculis dolor, ut sollicitudin odio. Aliquam gravida semper ultrices.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod
                nibh nec arcu consectetur,
            </p>
            </div>
          </div>
  )
}

export default Footer
