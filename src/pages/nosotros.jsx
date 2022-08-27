import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Nosotros.module.css';

import ImageNosotros from '../public/images/nosotros.jpg';

const Nosotros = () => {
    return (
      <>
        <Layout pagina="Nosotros">
          <main className="contenedor">
            <h2 className="heading">Nosotros</h2>
            <div className={styles.contenido}>
              <Image
                layout="responsive"
                src={ImageNosotros}
                alt="nosotros-image"
                width={600}
                height={450}
              />
              <div>
                <p>
                  Praesent interdum ante nec maximus hendrerit. Aliquam eu rhoncus lacus. Nulla rutrum urna ullamcorper, fermentum eros sed, commodo risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis mi mauris, sollicitudin sit amet nisi vitae, consectetur congue mauris. Donec non dapibus massa. Quisque non varius leo. Ut a sollicitudin metus, quis faucibus massa. Nunc vel nisi in sapien convallis vehicula id sit amet tortor. Fusce maximus diam vel nisl finibus placerat ac ac sem. Etiam eleifend pharetra augue at interdum. Phasellus in fermentum ipsum. Phasellus vestibulum consequat sapien, vel accumsan urna euismod id. Donec bibendum erat non est pretium, quis commodo tortor volutpat.
                </p>
              </div>
            </div>
          </main>
        </Layout>
      </>
    );
};

export default Nosotros;
