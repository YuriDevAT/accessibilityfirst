import Image from "next/image";
import useTranslation from 'next-translate/useTranslation';
import Layout from '../components/layout'
import Container from '../components/container'
import Head from "next/head";
import PostGrid from '../components/post-grid'
import { getAllPosts } from '../lib/api'
import Post from '../interfaces/post'
import { GetStaticProps } from 'next'

const title = "UX Design"

type Props = {
  allPosts: Post[]
}

const UXDesign = ({ allPosts }: Props) => {
  const { t } = useTranslation('ux-design');
  const posts = allPosts.filter((category) => category.category === "UX Design")

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <h1 className="mt-16 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">{t('title')}</h1>
        <section className="mt-16 mb-32">
          {posts.length > 0 ? <PostGrid posts={posts} /> :
            <>
              <p className="text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">{t('p')}</p>
              <Image src={"/assets/coming-soon.png"} width={250} height={250} alt="" />
            </>
          }
        </section>
      </Container>
    </Layout >
  )
}

export default UXDesign

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allPosts = getAllPosts(locale!, [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'category'
  ])

  return {
    props: { allPosts },
  }
}