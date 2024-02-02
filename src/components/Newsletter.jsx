import Banner from "../shared/Banner"
import newsimg from '../assets/Newsletter.png'
function Newsletter() {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
      <Banner banner={newsimg} heading="Each student an share their discount code for friends" paragraph="A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”" btn1="I have a code" />
    </div>
  )
}

export default Newsletter
