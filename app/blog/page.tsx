'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/button'
import { Card, CardContent } from '../../components/ui/card'
import { Navbar } from '../components/Navbar'
import { ArticleDetailView } from '../components/ArticleDetailView'

// Mock blog data with full content
const latestPosts = [
  {
    id: 1,
    title: "ORC Visit",
    description: "Cornerstone Orphanage was founded in 1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.",
    content: `Cornerstone Orphanage was founded in 1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.

Since our establishment, we have been dedicated to creating a nurturing environment where children can grow, learn, and thrive. Our mission extends beyond providing shelter; we aim to cultivate hope, education, and spiritual growth in every child who walks through our doors.

The orphanage currently houses over 65 children, providing them with not just a roof over their heads, but a loving family environment. We believe that every child deserves the opportunity to pursue their dreams and reach their full potential, regardless of their circumstances.

Our programs include comprehensive education support, healthcare services, vocational training, and spiritual guidance. We work closely with local schools to ensure our children receive quality education, and many of our former residents have gone on to pursue higher education and successful careers.

The impact of our work extends far beyond the walls of our facility. We have established strong partnerships with the local community, creating a network of support that benefits not only our children but the entire region. Through various outreach programs, we continue to identify and support vulnerable children in the surrounding areas.

As we look to the future, our commitment remains unwavering. We continue to seek partnerships and support from individuals and organizations who share our vision of creating a better world for children in need. Together, we can ensure that every child has the opportunity to experience love, family, and hope.`,
    image: "/figmaAssets/image-10.png",
    category: "Visit",
    author: "Joel Jijingi",
    date: "November 8, 2025"
  },
  {
    id: 2,
    title: "Christmas Celebration 2024",
    description: "A heartwarming celebration of Christmas at Cornerstone Orphanage, filled with joy, gifts, and the spirit of giving that touched every child's heart.",
    content: `The Christmas season at Cornerstone Orphanage is always a magical time, but this year's celebration was particularly special. Thanks to the generous support of our community partners and donors, we were able to create an unforgettable experience for all 65 children in our care.

The festivities began early in December with the decoration of our main hall. Children of all ages participated in creating handmade ornaments, painting colorful stars, and crafting nativity scenes. The excitement was palpable as they watched their dormitories transform into winter wonderlands.

On Christmas Eve, we held our annual candlelight service, where the children shared songs, recited poems, and performed a beautiful nativity play. The evening was filled with laughter, tears of joy, and a profound sense of family that exemplifies what Cornerstone Orphanage represents.

Christmas morning brought the much-anticipated gift exchange. Each child received personalized presents, carefully selected to match their interests and needs. From educational materials and toys to clothing and sports equipment, every gift was wrapped with love and delivered with the hope of bringing smiles to young faces.

The Christmas feast was a community effort, with local businesses and families contributing traditional dishes, desserts, and special treats. The dining hall was filled with the sounds of celebration as children, staff, and volunteers came together to share this special meal.

This celebration would not have been possible without the incredible support of our donors, volunteers, and community partners. Their generosity not only provided material gifts but also demonstrated to our children that they are loved, valued, and not forgotten.

As we reflect on this wonderful celebration, we are reminded of the true spirit of Christmas – the gift of love, hope, and family. These values continue to guide our mission at Cornerstone Orphanage every day of the year.`,
    image: "/figmaAssets/image-3.png",
    category: "Celebration",
    author: "Sarah Johnson",
    date: "December 25, 2024"
  },
  {
    id: 3,
    title: "Educational Achievement Awards",
    description: "Recognizing the outstanding academic achievements of our students and celebrating their dedication to learning and personal growth.",
    content: `Education has always been at the heart of Cornerstone Orphanage's mission. This month, we had the privilege of celebrating the remarkable academic achievements of our students during our annual Educational Achievement Awards ceremony.

Twenty-three students received recognition for their outstanding performance in various subjects, from mathematics and science to literature and arts. These achievements are particularly meaningful as they represent not just academic success, but the resilience and determination of young people who have overcome significant challenges.

Among our honorees was 16-year-old Grace Adamu, who received the highest academic achievement award for maintaining excellent grades across all subjects while also serving as a peer tutor for younger children. Her dedication to both her studies and helping others exemplifies the values we strive to instill in all our children.

The ceremony also recognized students who showed significant improvement throughout the year. We believe that progress, not just perfection, deserves celebration. These young learners demonstrated that with support, encouragement, and hard work, any goal is achievable.

Our educational program extends beyond traditional academics. This year, we introduced new vocational training courses in computer skills, tailoring, and agriculture. Several of our older students have already shown remarkable aptitude in these areas and are preparing for future careers.

The partnership with local schools continues to be crucial to our success. Teachers from partner institutions regularly visit to provide additional support and mentoring. This collaboration ensures our children receive the same quality education as their peers in the broader community.

We are also proud to announce that five of our graduates have received scholarships to pursue higher education at universities and technical colleges. This achievement represents not just individual success, but the realization of our vision to break the cycle of poverty through education.

Looking ahead, we are planning to expand our educational programs to include more STEM subjects and entrepreneurship training. With continued support from our community, we aim to prepare our children for success in an increasingly digital world.`,
    image: "/figmaAssets/image-9.png",
    category: "Education",
    author: "Dr. Michael Peters",
    date: "October 15, 2025"
  }
]

const articleOfTheDay = {
  id: 0,
  title: "ORC Visit",
  description: "Cornerstone Orphanage was founded in 1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need. Cornerstone Orphanage was founded in 1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.",
  content: `Cornerstone Orphanage was founded in 1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.Cornerstone Orphanage was founded in1999, by Mr. and Mrs. Joel Jijingi, in the heart of Yelwa Kagadama, Bauchi, with a vision to provide love, care, and support to children in need.

Today marked a special milestone as we welcomed representatives from the Orphanage Regulatory Commission (ORC) for their annual inspection and review of our facilities and programs. This visit represents more than just a regulatory requirement; it's an opportunity to showcase the incredible progress our children have made and the positive impact of our comprehensive care programs.

The ORC team conducted thorough evaluations of our educational facilities, healthcare provisions, living quarters, and recreational areas. They were particularly impressed with our newly renovated computer laboratory, which now serves 40 children with modern equipment and high-speed internet connectivity.

During their visit, the commission members had the opportunity to interact directly with our children, observing classroom sessions, meal times, and recreational activities. The genuine smiles and confident interactions of our children served as the best testimony to the quality of care they receive at Cornerstone Orphanage.

Mrs. Elizabeth Musa, the lead commissioner, expressed her admiration for the family-like atmosphere that pervades our facility. "It's clear that these children are not just being housed; they are being loved, nurtured, and prepared for successful futures," she noted during her closing remarks.

The inspection covered all aspects of our operation, including our financial management, staff qualifications, safety protocols, and child protection policies. We are proud to report that we exceeded expectations in all evaluated areas, maintaining our stellar reputation as one of the region's premier childcare institutions.

One of the highlights of the visit was the presentation by our older children about their future aspirations. Hearing 15-year-old David speak passionately about his dream to become a doctor, and 17-year-old Esther discuss her plans to study engineering, reinforced the transformative power of the education and support we provide.

The ORC visit concluded with the renewal of our operating license and a commendation for excellence in childcare services. This recognition validates our commitment to providing the highest standard of care and positions us well for future growth and expansion of our programs.

As we continue our mission, visits like these remind us of the importance of accountability, transparency, and continuous improvement in everything we do for the children in our care.`,
  image: "/figmaAssets/image-10.png",
  category: "Visit",
  author: "Administrative Team",
  date: "November 8, 2025"
}

const lastMonthPosts = [
  {
    id: 4,
    title: "Health and Wellness Program Launch",
    description: "Introducing comprehensive health and wellness initiatives designed to ensure the physical and mental well-being of every child in our care.",
    content: `At Cornerstone Orphanage, the health and well-being of our children is our top priority. This month, we are excited to announce the launch of our comprehensive Health and Wellness Program, designed to address both the physical and mental health needs of every child in our care.

The program includes regular health screenings, nutritional counseling, fitness activities, and mental health support services. We have partnered with local healthcare providers to ensure our children receive the best possible medical care, including dental services, vision care, and specialized treatments when needed.

Our new wellness initiative also includes the establishment of a modern medical clinic on our premises, staffed by qualified nurses and visited regularly by pediatricians. This ensures that minor health issues are addressed promptly and that our children receive preventive care to maintain optimal health.

Mental health support is an integral part of our program. We have trained counselors who provide individual and group therapy sessions, helping children process their experiences and develop healthy coping mechanisms. We believe that emotional well-being is just as important as physical health in ensuring our children's success.

The program also emphasizes the importance of physical activity and nutrition. We have expanded our sports programs to include soccer, basketball, and athletics, providing children with outlets for physical expression and team building. Our kitchen has been upgraded to prepare more nutritious meals that support growing bodies and minds.

Early results from the program have been encouraging. Children report feeling more energetic, confident, and emotionally stable. Teachers have noticed improved concentration and academic performance, while staff members observe better social interactions among the children.

We are grateful to our healthcare partners and donors who have made this program possible. Their support enables us to provide holistic care that addresses every aspect of our children's development and prepares them for healthy, successful futures.`,
    image: "/figmaAssets/image-10.png",
    category: "Health",
    author: "Dr. Fatima Hassan",
    date: "October 20, 2025"
  },
  {
    id: 5,
    title: "Community Partnership Expansion",
    description: "Building stronger connections with local businesses and organizations to create more opportunities for our children's growth and development.",
    content: `Community partnerships have always been essential to the success of Cornerstone Orphanage, and we are thrilled to announce significant expansion of these vital relationships. This month, we formalized partnerships with ten new local businesses and organizations, creating unprecedented opportunities for our children.

These partnerships encompass various areas including education, vocational training, mentorship, and future employment opportunities. Local businesses are not only providing financial support but are also offering hands-on learning experiences through internships and apprenticeship programs for our older children.

One of our most exciting new partnerships is with TechnoVation Solutions, a leading IT company that has established a coding bootcamp specifically for our teenagers. This program will equip them with valuable digital skills that are increasingly important in today's job market.

The Bauchi Artisans Guild has also joined our partnership network, offering traditional craft training in pottery, weaving, and woodworking. These skills not only provide potential career paths but also connect our children with their cultural heritage and traditions.

Our partnership with Green Valley Agricultural Cooperative has enabled us to expand our farming program. Children are now learning modern agricultural techniques, sustainable farming practices, and business management skills that could lead to entrepreneurial opportunities in agriculture.

Local healthcare providers have increased their involvement, with several medical professionals volunteering their time for regular health clinics and health education programs. This partnership ensures our children receive comprehensive healthcare while also learning about health and wellness.

The impact of these partnerships extends beyond immediate benefits. They demonstrate to our children that the community believes in their potential and is invested in their success. This support system helps build confidence and creates a network that will benefit them long after they leave our care.

We look forward to continuing to strengthen these relationships and developing new partnerships that will further enhance the opportunities available to our children. Together, we are building a brighter future for every child at Cornerstone Orphanage.`,
    image: "/figmaAssets/image-3.png",
    category: "Partnership",
    author: "Community Relations Team",
    date: "October 12, 2025"
  },
  {
    id: 6,
    title: "Alumni Success Stories",
    description: "Celebrating the achievements of former Cornerstone Orphanage residents who are now making positive impacts in their communities and careers.",
    content: `One of the greatest sources of pride for Cornerstone Orphanage is witnessing the success of our former residents as they build meaningful lives and contribute positively to society. This month, we celebrate several remarkable alumni success stories that inspire current residents and demonstrate the lasting impact of our programs.

Jennifer Yakubu, who lived at Cornerstone Orphanage for eight years, recently graduated with honors from the University of Jos with a degree in Environmental Science. She has been accepted into a master's program and plans to focus her career on sustainable development in rural communities. Jennifer credits her time at the orphanage with instilling values of perseverance and community service.

Samuel Adebayo, another proud alumnus, has established a successful tailoring business that employs twelve people from his community. He learned basic tailoring skills through our vocational program and built upon that foundation to create a thriving enterprise. Samuel regularly returns to mentor current residents and has created internship opportunities for older children.

Dr. Mary Gideon represents one of our most inspiring success stories. After leaving Cornerstone Orphanage to pursue higher education on scholarship, she completed medical school and is now working as a pediatrician at the Federal Medical Centre in Bauchi. She volunteers monthly at our health clinic, providing medical care to current residents.

These alumni maintain strong connections with Cornerstone Orphanage, often returning as mentors, donors, and advocates for our mission. Their success stories serve as powerful motivation for current residents, showing them that their circumstances do not define their potential.

The achievements of our alumni span various fields including education, healthcare, business, technology, and public service. Each success story validates our approach to holistic child development and reinforces our belief that with proper support, every child can achieve their dreams.

We continue to maintain an active alumni network that provides ongoing support for recent graduates as they transition to independent living. This network also serves as a valuable resource for current residents, offering mentorship, career guidance, and inspiration.

As we celebrate these successes, we are reminded of our responsibility to continue providing the same level of care and opportunity to current and future residents of Cornerstone Orphanage.`,
    image: "/figmaAssets/image-9.png",
    category: "Alumni",
    author: "Alumni Relations Office",
    date: "September 28, 2025"
  }
]

export default function BlogPage() {
  const [selectedArticle, setSelectedArticle] = useState<any>(null)
  const [isShowingArticle, setIsShowingArticle] = useState(false)

  const handleReadMore = (article: any) => {
    setSelectedArticle(article)
    setIsShowingArticle(true)
  }

  const handleBackToBlog = () => {
    setIsShowingArticle(false)
    setSelectedArticle(null)
  }

  if (isShowingArticle && selectedArticle) {
    return (
      <div className="min-h-screen bg-[#fffdf7]">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <ArticleDetailView 
            article={selectedArticle} 
            onBack={handleBackToBlog}
          />
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fffdf7]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Latest Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f33] mb-8 sm:mb-10 lg:mb-12 font-[family-name:var(--font-archivo)]"
          >
            Latest
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {latestPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0b1f33] mb-3 font-[family-name:var(--font-archivo)]">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        onClick={() => handleReadMore(post)}
                        className="bg-[#164672] hover:bg-[#164672]/90 text-white rounded-full px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Read more
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Article of the Day Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f33] mb-8 sm:mb-10 lg:mb-12 font-[family-name:var(--font-archivo)]"
          >
            Article of the day
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={articleOfTheDay.image}
                  alt={articleOfTheDay.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-3/5 p-6 sm:p-8 lg:p-12">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#164672] mb-4 sm:mb-6 font-[family-name:var(--font-archivo)]">
                  {articleOfTheDay.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                  {articleOfTheDay.description}
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    onClick={() => handleReadMore(articleOfTheDay)}
                    className="bg-[#164672] hover:bg-[#164672]/90 text-white rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Read more
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Last Month Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border-2 border-[#164672] rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#164672] mb-8 sm:mb-10 lg:mb-12 font-[family-name:var(--font-archivo)]">
              Last month
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {lastMonthPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0b1f33] mb-3 font-[family-name:var(--font-archivo)]">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
                        {post.description}
                      </p>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          onClick={() => handleReadMore(post)}
                          className="bg-[#164672] hover:bg-[#164672]/90 text-white rounded-full px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          Read more
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Support Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src="/figmaAssets/group-2.png"
            alt="Support background"
            className="w-full h-80 sm:h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 font-[family-name:var(--font-archivo)] text-balance">
              Support a child today
            </h2>
            <p className="text-white text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-4xl leading-relaxed font-[family-name:var(--font-archivo)]">
              Cornerstone Orphanage provides a safe and nurturing home where children are empowered to dream, learn, and discover their purpose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-[#164672] rounded-full px-6 sm:px-8 py-3 text-base sm:text-lg font-bold font-[family-name:var(--font-archivo)] transition-all duration-300"
              >
                Join our mission
              </motion.button>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#164672] hover:bg-[#164672]/90 text-white rounded-full px-6 sm:px-8 py-3 text-base sm:text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  Support a child today
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 sm:py-10 lg:py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <img
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
                alt="Cornerstone Orphanage Logo"
                src="/figmaAssets/image-11-1.png"
              />
              <div className="text-lg sm:text-xl font-bold text-black font-[family-name:var(--font-inter)]">
                Cornerstone Orphanage
              </div>
            </motion.div>

            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
              <motion.a whileHover={{ y: -2 }} href="/" className="text-[#0b1f33] hover:text-[#164672] font-medium text-sm sm:text-base transition-colors">Home</motion.a>
              <motion.a whileHover={{ y: -2 }} href="/#about" className="text-[#0b1f33] hover:text-[#164672] font-medium text-sm sm:text-base transition-colors">About</motion.a>
              <motion.a whileHover={{ y: -2 }} href="/#contact" className="text-[#0b1f33] hover:text-[#164672] font-medium text-sm sm:text-base transition-colors">Contact us</motion.a>
              <motion.a whileHover={{ y: -2 }} href="/blog" className="text-[#0b1f33] hover:text-[#164672] font-medium text-sm sm:text-base transition-colors">Blog</motion.a>
            </nav>

            <div className="flex items-center gap-3 sm:gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#164672] hover:text-white transition-colors"
              >
                <span className="text-sm font-bold">f</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#164672] hover:text-white transition-colors"
              >
                <span className="text-sm font-bold">ig</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#164672] hover:text-white transition-colors"
              >
                <span className="text-sm font-bold">in</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 pt-8 border-t border-gray-200 text-center"
          >
            <p className="text-gray-600 text-xs sm:text-sm font-[family-name:var(--font-archivo)]">
              © 2025 Cornerstone Orphanage All Rights Reserved
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}