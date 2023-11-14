import styles from 'styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/legacy/image'

const Posts = ({ posts }) => {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`}>
            <figure>
              <Image
                src={eyecatch.url}
                alt=''
                layout='fill'
                objectFit='cover'
                width={eyecatch.width}
                height={eyecatch.height}
                sizes='(min-width: 1152px) 576px, 50vw'
                placeholder='blur'
                blurDataURL='eyecatch.blurDataURL'
              />
            </figure>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  )
}

export default Posts
