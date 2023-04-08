<template>
  <div class="home">
    <!-- HOME HERO -->
    <div class="home-hero pt-36">
      <div class="site-container home-hero--container">
        <div class="home-hero--left">
          <div class="home-hero--left__welcome">
            <div class="home-hero--left__welcome--line"></div>
            <h4 class="home-hero--left__welcome--text">Welcome to Pages</h4>
          </div>
          <h1 class="home-hero--left__title">
            Books are uniquely portable magic
          </h1>
          <p class="home-hero--left__subtitle">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <div class="home-hero--left__buttons">
            <div class="button button-bg-yellow"><p>Order Today</p></div>
            <div class="button button-no-bg">
              <p class="button-no-bg__text">Read Free Demo</p>
            </div>
          </div>
          <div class="home-hero--left__list">
            <div class="home-hero--left__list--container">
              <BookPoint :title="'Pages'" :value="'586 Pages'" />
            </div>
            <div class="home-hero--left__list--container">
              <BookPoint :title="'Length'" :value="'10 Hours'" />
            </div>
            <div class="home-hero--left__list--container">
              <BookPoint :title="'Rating'" :value="'4.5/5 (305 ratings)'" />
            </div>
          </div>
        </div>
        <div class="home-hero--right">
          <img
            src="@/assets/img/book/book-1.png"
            alt="Book Hero"
            class="home-hero--right__img"
          />
        </div>
      </div>
    </div>
    <!-- HOME INCLUDES -->
    <div class="home-includes py-16 lg:py-32">
      <div class="site-container home-includes--container">
        <SectionTitle :title="'Author’s Book Includes'" class="mb-14" />

        <div class="home-includes--books">
          <div
            v-for="(item, i) in bookIncludes"
            :key="`book-includes-${i}`"
            class="home-includes--books__wrapper"
          >
            <CardBookIncludes
              :title="item.title"
              :desc="item.desc"
              :points="item.points"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- HOME AUTHOR -->
    <div class="home-author py-16 lg:py-32">
      <div class="site-container home-author--container">
        <div class="home-author--left">
          <div class="image--img">
            <img src="@/assets/img/author/author-1.jpg" alt="Author" class="" />
          </div>
        </div>
        <div class="home-author--right">
          <SectionTitle
            :title="'About Author'"
            :linePosition="'left'"
            class="mb-6"
          />
          <p class="home-author--desc">
            All the Lorem Ipsum generators on the Internet tend to repeated
            predefined chunks as necessary, making this the first true value
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful.
          </p>
          <div class="home-author--review">
            <div class="home-author--review__item">
              <h1 class="home-author--review__item--number">02</h1>
              <p class="home-author--review__item--text">Book Published</p>
            </div>
            <div class="home-author--review__item">
              <h1 class="home-author--review__item--number">4.5</h1>
              <p class="home-author--review__item--text">User Reviews</p>
            </div>
            <div class="home-author--review__item">
              <h1 class="home-author--review__item--number">04</h1>
              <p class="home-author--review__item--text">Best Seller Awards</p>
            </div>
          </div>
          <div class="home-author--barcode">
            <img src="@/assets/img/barcode//barcode-1.png" alt="Barcode" />
            <div class="home-author--barcode__text">
              <h5 class="home-author--barcode__text--name">
                John Abraham, Ph.d
              </h5>
              <p>Mail: johnabraham@gmail.com</p>
              <p>Phone: (+2) 123 545 9000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- HOME TRUSTED -->
    <div class="home-trusted py-16 lg:py-32">
      <div class="site-container home-trusted--container">
        <SectionTitle :title="'Trusted by the Best'" class="mb-10" />
        <div class="home-trusted--client">
          <div
            v-for="(item, i) in trustedClients"
            :key="`trusted-${i}`"
            class="home-trusted--client__wrapper"
          >
            <CardTrusted
              :img="item.img"
              :title="item.title"
              :desc="item.desc"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- HOME GET BOOK COPY -->
    <div class="home-copy py-10">
      <div class="site-container home-copy--container">
        <div class="home-copy--left">
          <SectionTitle
            :title="'Get Book Copy Today!'"
            :linePosition="'left'"
            :type="'light'"
            class="mb-6"
          />
          <p class="home-copy--left__desc">
            This the first true value generator on the Internet. It uses alphas
            dictionary of over 200 Latin words.
          </p>
          <div class="button button-border-yellow text-white">
            <p>Order Today</p>
          </div>
        </div>
        <div class="home-copy--right">
          <img
            src="@/assets/img/home/coffee-book.png"
            alt="Coffee & Book"
            class="home-copy--right__img"
          />
        </div>
      </div>
    </div>
    <!-- HOME LEARN -->
    <div class="home-learn py-16 lg:py-32">
      <div class="site-container home-learn--container">
        <SectionTitle :title="'What will you learn?'" class="mb-10" />

        <div class="home-learn--container__wrapper">
          <div class="home-learn--left">
            <div class="home-learn--left__wrapper">
              <div
                v-for="(item, i) in whatLearn"
                :key="`learn-${i}`"
                class="home-learn--left__wrapper--box"
              >
                <CardLearn :number="item.id" :title="item.title" />
              </div>
            </div>
          </div>
          <div class="home-learn--right">
            <div class="image--img">
              <img
                src="@/assets/img/home/learn.jpg"
                alt="Learn Image"
                class=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- HOME CHAPTER -->
    <div class="home-chapter py-16 lg:py-32">
      <div class="home-chapter--container">
        <SectionTitle :title="'The Chapter Includes'" class="mb-10" />

        <div class="home-chapter--chapters">
          <div
            v-for="(item, i) in chapterIncludes"
            :key="`chapter-${i}`"
            class="home-chapter--chapters__item"
          >
            <CardChapter
              :title="item.title"
              :desc="item.desc"
              :points="item.points"
            />
          </div>
        </div>

        <div class="home-chapter--button">
          <div class="button button-bg-yellow">
            <p>Start a 15-Days Free Trial</p>
          </div>

          <p class="home-chapter--button__text">
            Short description about each chapter <br />
            <a href="#">Have any questions?</a> Contact us
          </p>
        </div>
      </div>
    </div>
    <!-- HOME REVIEW -->
    <div class="home-review py-16 lg:py-32">
      <div class="home-review--container">
        <div class="home-review--left">
          <SectionTitle
            :title="'What Readers Say About the Book'"
            :linePosition="'left'"
            class="mb-10 pr-20"
          />
          <p class="home-review--desc">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators.
          </p>
          <div class="home-review--score">
            <div
              v-for="i in 5"
              :key="`score-${i}`"
              class="star-item"
              :class="{
                'star-item--full': 4.5 - i >= 0,
                'star-item--half': 4.5 - i < 0 && 4.5 - i > -1,
              }"
            ></div>
            <h6 class="star-score">(4.8/5)</h6>
          </div>
          <p class="home-review--overall">Overall Customer Ratings</p>
        </div>
        <div class="home-review--right">
          <div class="home-review--right__wrapper">
            <div class="home-review--right__wrapper--item">
              <CardReview />
              <CardReview
                :img="'review-2.png'"
                :name="'James Anderson'"
                :score="4"
                :quote="'Mind Blowing Words'"
              />
            </div>
            <div class="home-review--right__wrapper--item">
              <CardReview
                :img="'review-3.png'"
                :name="'Christina Louis'"
                :score="4.5"
                :quote="'Great Books Collections'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- HOME ARTICLES -->
    <div class="home-article py-16 lg:py-32">
      <div class="home-article--container">
        <SectionTitle :title="'Articles & Resources'" class="mb-10" />

        <div class="home-article--articles">
          <div
            v-for="(item, i) in articles"
            :key="`articles-${i}`"
            class="home-article--articles__item"
          >
            <CardArticle
              :img="item.image"
              :title="item.title"
              :desc="item.desc"
              :author="item.author"
              :date="item.date"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- HOME SUBSCRIBE -->
    <div class="home-subscribe py-16 lg:py-32">
      <div class="home-subscribe--container">
        <div class="home-subscribe--container__wrapper">
          <SectionTitle
            :title="'Read a free chapter'"
            :lineColor="'dark'"
            class="mb-6"
          />
          <p class="home-subscribe--desc">
            Making this the first true value generator on the Internet. It of
            over 200 Latin words, combined with a handful.
          </p>
          <div class="home-subscribe--forms">
            <div class="home-subscribe--forms__input">
              <input
                type="text"
                placeholder="Your Email id..."
                class="home-subscribe--forms__input--text"
              />
            </div>
            <div class="home-subscribe--forms__button">
              <div class="home-subscribe--forms__button--btn">
                <h6>Subscribe</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      bookIncludes: [
        {
          id: 1,
          slug: "atomic-ones",
          title: "Atomic One's",
          desc: "Many variations of passages of Lorem Ipsum willing araise  alteration in some form.",
          points: [
            {
              title: "Pages",
              value: "586 Pages",
            },
            {
              title: "Length",
              value: "10 Hours",
            },
          ],
        },
        {
          id: 2,
          slug: "the-dark-light",
          title: "The Dark Light",
          desc: "Many variations of passages of Lorem Ipsum willing araise  alteration in some form.",
          points: [
            {
              title: "Pages",
              value: "345 Pages",
            },
            {
              title: "Length",
              value: "7 Hours",
            },
          ],
        },
      ],
      trustedClients: [
        {
          img: "trusted-1.png",
          title: "Amazen Corp",
          desc: "A long established fact that a who looking at its layout.",
        },
        {
          img: "trusted-2.png",
          title: "Megan Books",
          desc: "A long established fact that a who looking at its layout.",
        },
        {
          img: "trusted-3.png",
          title: "Los Books",
          desc: "A long established fact that a who looking at its layout.",
        },
        {
          img: "trusted-4.png",
          title: "Urban Lib",
          desc: "A long established fact that a who looking at its layout.",
        },
      ],
      whatLearn: [
        {
          id: 1,
          title: "Use HDFS & Map Reduce for storing & analyzing data at scale.",
        },
        {
          id: 2,
          title:
            "Consume streaming data using Spark Streaming, Flink, and Storm.",
        },
        {
          id: 3,
          title:
            "Choose an appropriate data storage technology for your application",
        },
        {
          id: 4,
          title:
            "Analyze non-relational data using HBase, Cassandra, and MongoDB.",
        },
      ],
      chapterIncludes: [
        {
          id: 1,
          title: "Chapter- 01   Get Started Intro",
          desc: "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
          points: [
            {
              id: 1,
              title: "Pages",
              desc: "85 Pages",
            },
            {
              id: 1,
              title: "Length",
              desc: "1 Hour 15 Mins",
            },
          ],
        },
        {
          id: 1,
          title: "Chapter- 02   Create a Massive Content",
          desc: "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
          points: [
            {
              id: 1,
              title: "Pages",
              desc: "85 Pages",
            },
            {
              id: 1,
              title: "Length",
              desc: "1 Hour 15 Mins",
            },
          ],
        },
        {
          id: 1,
          title: "Chapter- 03   Maintaining the Creative Arcs",
          desc: "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
          points: [
            {
              id: 1,
              title: "Pages",
              desc: "85 Pages",
            },
            {
              id: 1,
              title: "Length",
              desc: "1 Hour 15 Mins",
            },
          ],
        },
        {
          id: 1,
          title: "Chapter- 04   The Conclusion",
          desc: "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
          points: [
            {
              id: 1,
              title: "Pages",
              desc: "85 Pages",
            },
            {
              id: 1,
              title: "Length",
              desc: "1 Hour 15 Mins",
            },
          ],
        },
      ],
      articles: [
        {
          id: 1,
          image: "article-1.jpg",
          title: "The energy efficiency offers hydrotherapy or swim",
          desc: "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.",
          author: "Author",
          date: "2023-05-03 ",
        },
        {
          id: 2,
          image: "article-2.jpg",
          title: "Release of Letraset sheets tools containing  passages",
          desc: "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.",
          author: "Author",
          date: "2023-04-20 ",
        },
        {
          id: 3,
          image: "article-3.jpg",
          title: "The energy efficiency offers hydrotherapy ",
          desc: "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.",
          author: "Author",
          date: "2023-04-13 ",
        },
      ],
    };
  },
};
</script>
