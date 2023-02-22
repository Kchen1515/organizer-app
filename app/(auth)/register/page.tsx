import Image from 'next/image'
import styles from '../../../styles/register.module.css'
import testImage from '../../../assets/weather_db.jpg'
import dashboardImage from '../../../assets/dashboard.jpg'
import AuthForm from '@/components/AuthForm'

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.registerFormContainer}>
          <AuthForm/>
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.registerImage}
          src={dashboardImage}
          alt="placeholder image"
          quality={100}
          />

      </div>

    </div>
  )
}