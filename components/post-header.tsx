import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="md:flex items-center hidden md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
        <div className="md:ml-4 md:border-l md:border-l-black md:pl-4 font-mono text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto block md:hidden mb-6">
        <Avatar name={author.name} picture={author.picture} />
        <div className="font-mono text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader