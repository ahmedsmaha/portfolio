import{f as n,l,o as d,ya as p}from"./chunk-4AA4N2XP.js";var b=`
<article class="max-w-4xl mx-auto py-16 px-6">

  <!-- Header -->
  <header class="mb-14">

    <h1 class="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
      From Monolith to Microservices: What Building My Own Infrastructure Taught Me
    </h1>

    <p class="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
      Building my own microservices infrastructure completely changed the way I think about backend
      development and software architecture.
    </p>

  </header>

  <!-- Intro -->

  <section class="space-y-6 text-zinc-700 dark:text-zinc-300 leading-8">

    <p>
      For a long time, most of my projects followed a monolithic architecture. Everything lived
      inside a single application and, honestly, it worked well.
    </p>

    <p>
      But the more I learned about large-scale systems, the more curious I became about how modern
      applications are actually built behind the scenes.
    </p>

    <p>
      Instead of only reading articles or watching videos, I decided to build my own modular
      infrastructure from scratch and learn by doing.
    </p>

  </section>

  <!-- Quote -->

  <blockquote
    class="my-12 border-l-4 border-blue-500 pl-6 italic text-xl text-zinc-700 dark:text-zinc-300">
    "Building distributed systems taught me that infrastructure is just as important as code."
  </blockquote>

  <!-- Section -->

  <section class="mt-14">

    <h2 class="text-2xl font-bold mb-5">
      Why I Started Exploring Microservices
    </h2>

    <div class="space-y-5 leading-8 text-zinc-700 dark:text-zinc-300">

      <p>
        My goal wasn't to build a production-ready platform. I simply wanted to understand how
        services communicate, how data flows between them, and what challenges appear as systems
        grow.
      </p>

      <p>
        I quickly discovered that microservices are not only about splitting code into smaller
        applications. They introduce an entirely new set of architectural decisions.
      </p>

    </div>

  </section>

  <!-- Section -->

  <section class="mt-14">

    <h2 class="text-2xl font-bold mb-5">
      Docker Changed My Workflow
    </h2>

    <div class="space-y-5 leading-8 text-zinc-700 dark:text-zinc-300">

      <p>
        Docker became the foundation of the entire infrastructure. Instead of manually installing
        every dependency, I could bring up databases, caches, and monitoring tools with a single
        command.
      </p>

      <p>
        This not only improved productivity but also gave me a reproducible development environment.
      </p>

    </div>

  </section>

  <!-- Highlight -->

  <div
    class="my-14 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 bg-zinc-50 dark:bg-zinc-900">

    <h3 class="font-semibold text-lg mb-4">
      Biggest Lesson
    </h3>

    <p class="text-zinc-600 dark:text-zinc-400 leading-7">
      Building distributed systems is not only about writing business logic. Monitoring,
      observability, service communication, and debugging are equally important.
    </p>

  </div>

  <!-- Section -->

  <section>

    <h2 class="text-2xl font-bold mb-5">
      What I Would Do Differently
    </h2>

    <ul class="space-y-4 list-disc pl-6 text-zinc-700 dark:text-zinc-300">

      <li>Define service boundaries earlier.</li>

      <li>Introduce centralized configuration from the beginning.</li>

      <li>Invest more time in automated testing.</li>

      <li>Implement distributed tracing sooner.</li>

    </ul>

  </section>

  <!-- Conclusion -->

  <section class="mt-14">

    <h2 class="text-2xl font-bold mb-5">
      Final Thoughts
    </h2>

    <p class="leading-8 text-zinc-700 dark:text-zinc-300">
      Building this infrastructure gave me a much deeper understanding of software architecture.
      More importantly, it taught me that every architectural decision comes with trade-offs, and
      understanding those trade-offs is what makes system design truly interesting.
    </p>

  </section>

</article>
`,x=`
<article class="max-w-4xl mx-auto py-16 px-6">

  <header class="mb-14">

    <h1 class="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
      What I Learned After Building Multiple REST APIs with Node.js and TypeScript
    </h1>

    <p class="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
      Over the past few years, I've built several backend applications using Node.js and TypeScript.
      Looking back, the biggest lessons weren't about writing more code, but about writing better code.
    </p>

  </header>

  <section class="space-y-6 text-zinc-700 dark:text-zinc-300 leading-8">

    <p>
      My early APIs were simple. Most of the logic lived inside route files, validation was inconsistent,
      and error handling usually came last.
    </p>

    <p>
      Everything worked at first, but as projects started growing, maintaining them became harder than expected.
    </p>

    <p>
      That's when I started paying more attention to architecture, project structure, and code organization.
    </p>

  </section>

  <blockquote
    class="my-12 border-l-4 border-emerald-500 pl-6 italic text-xl text-zinc-700 dark:text-zinc-300">
    "A working API is good, but a maintainable API is even better."
  </blockquote>

  <section class="mt-14">

    <h2 class="text-2xl font-bold mb-5">
      TypeScript Changed The Way I Build APIs
    </h2>

    <div class="space-y-5 leading-8 text-zinc-700 dark:text-zinc-300">

      <p>
        Adding TypeScript immediately improved my workflow. Strong typing reduced many runtime errors
        and made refactoring significantly safer.
      </p>

      <p>
        It also made larger codebases easier to navigate and understand, especially when working with
        services, DTOs, and database models.
      </p>

    </div>

  </section>

  <section class="mt-14">

    <h2 class="text-2xl font-bold mb-5">
      Project Structure Matters More Than I Thought
    </h2>

    <div class="space-y-5 leading-8 text-zinc-700 dark:text-zinc-300">

      <p>
        One of the biggest mistakes I made early on was mixing responsibilities everywhere.
      </p>

      <p>
        Today, I prefer separating controllers, services, middlewares, validation logic, and utilities.
        This keeps applications easier to maintain and extend as new features are added.
      </p>

    </div>

  </section>

  <div
    class="my-14 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 bg-zinc-50 dark:bg-zinc-900">

    <h3 class="font-semibold text-lg mb-4">
      Biggest Lesson
    </h3>

    <p class="text-zinc-600 dark:text-zinc-400 leading-7">
      Building APIs is not only about exposing endpoints. Error handling, validation, authentication,
      and maintainability are equally important.
    </p>

  </div>

  <section>

    <h2 class="text-2xl font-bold mb-5">
      Authentication Is More Than JWT
    </h2>

    <div class="space-y-5 leading-8 text-zinc-700 dark:text-zinc-300">

      <p>
        At first, I thought authentication was simply about generating tokens. In reality, proper
        authorization, password hashing, secure validation, and role management are just as important.
      </p>

      <p>
        Security is something that should be considered from the beginning, not added later.
      </p>

    </div>

  </section>

  <section class="mt-14">

    <h2 class="text-2xl font-bold mb-5">
      Final Thoughts
    </h2>

    <p class="leading-8 text-zinc-700 dark:text-zinc-300">
      Building multiple APIs taught me that clean architecture pays off in the long run. Features can
      always be added later, but maintaining poorly structured code becomes increasingly difficult as
      applications grow.
    </p>

  </section>

</article>
`,y=`
<article class="max-w-4xl mx-auto py-16 px-6">

  <header class="mb-14">


    <h1 class="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
      Frontend Is More Than UI: My Journey Learning Angular Through Real Projects
        </h1>

        <p class="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          When I first started learning Angular, I was mainly focused on building attractive user interfaces.
      Over time, I realized that frontend development involves much more than visual design.
    </p>

  </header>

  <section class="space-y-6 text-zinc-700 dark:text-zinc-300 leading-8">

    <p>
    Like many developers, I initially judged a frontend project by how it looked.If the UI looked good,
      I considered the project successful.
    </p>

        <p>
      But after building several applications, I discovered that architecture, maintainability, and user
      experience matter just as much as design.
  </p>

  </section>

  <blockquote
class="my-12 border-l-4 border-red-500 pl-6 italic text-xl text-zinc-700 dark:text-zinc-300" >
  "Great frontend applications are not only beautiful, they're also maintainable and easy to scale."
  </blockquote>

  <section class="mt-14">

    <h2 class="text-2xl font-bold mb-5">
      Components Changed The Way I Think
        </h2>

        <div class="space-y-5 leading-8 text-zinc-700 dark:text-zinc-300">

          <p>
          Angular's component-based architecture taught me the importance of reusability and separation
        of concerns.
      </p>

  <p>
        Breaking interfaces into smaller components made applications easier to maintain and significantly
        reduced duplicated code.
      </p>

  </div>

  </section>

  <section class="mt-14">

    <h2 class="text-2xl font-bold mb-5">
      Reactive Forms Are Extremely Powerful
        </h2>

        <div class="space-y-5 leading-8 text-zinc-700 dark:text-zinc-300">

          <p>
          Working with reactive forms helped me better understand validation, form state management,
            and handling complex user interactions.
      </p>

              <p>
        As applications became more complex, having a structured approach to forms proved invaluable.
      </p>

  </div>

  </section>

  <div
class="my-14 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 bg-zinc-50 dark:bg-zinc-900">

  <h3 class="font-semibold text-lg mb-4">
    Biggest Lesson
      </h3>

      <p class="text-zinc-600 dark:text-zinc-400 leading-7">
        Frontend development isn't just about making things look good. Performance, accessibility,
maintainability, and user experience all play a major role.
    </p>

  </div>

  <section>

  <h2 class="text-2xl font-bold mb-5">
    Performance Matters
      </h2>

      <div class="space-y-5 leading-8 text-zinc-700 dark:text-zinc-300">

        <p>
        As my projects grew, I started paying more attention to lazy loading, bundle size, and rendering performance.
      </p>

          <p>
        Even small optimizations can noticeably improve the overall user experience.
      </p>

  </div>

  </section>

  <section class="mt-14">

    <h2 class="text-2xl font-bold mb-5">
      Final Thoughts
        </h2>

        <p class="leading-8 text-zinc-700 dark:text-zinc-300">
          Building real - world Angular applications taught me that frontend development is a software engineering
discipline in its own right.Creating great experiences requires much more than writing HTML and CSS.
    </p>

  </section>

  </article>
`,o=[{id:"1",title:"From Monolith to Microservices: Lessons I Learned Building My Own Infrastructure",tag:"DevOps & Cloud Dev",date:"Feb 21, 2025",img:"images/monolithic-to-microservices.webp",text:"Tokens, components, docs \u2014 the exact process I follow to spin up a coherent design system in 48 hours.",featured:!0,content:b},{id:"2",title:"What I Learned Building Multiple REST APIs with Node.js and TypeScript",tag:"Backend & API Dev",date:"Jan 14, 2025",img:"images/rest_api.webp",text:"Contracts, pricing, scope creep, burnout \u2014 the things nobody tells you before you go solo.",featured:!0,content:x},{id:"3",title:"Frontend Is More Than UI: My Journey with Angular",tag:"Frontend Dev & UI",date:"Dec 3, 2024",img:"images/frontend-ui.webp",text:"No build step, no virtual DOM, no config hell. Just sprinkle some behaviour and ship.",featured:!0,content:y}],m=class s{constructor(e){this.http=e}http;getPosts(e=1,t=3,i="all"){let a=o;i&&i!=="All"&&(a=a.filter(h=>h.tag===i));let r=a.length,u=Math.ceil(r/t),c=(e-1)*t,g=a.slice(c,c+t);return n({posts:g,total:r,page:e,limit:t,totalPages:u})}getPostById(e){let t=o.find(i=>i.id===e);return n(t)}getFeaturedPosts(){return n(o.filter(e=>e.featured))}static \u0275fac=function(t){return new(t||s)(d(p))};static \u0275prov=l({token:s,factory:s.\u0275fac,providedIn:"root"})};export{m as a};
