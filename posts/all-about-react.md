# All About React

## How cool is react?
Hey, we are working with React in the class right now. And this is really, really cool. I built this little website with React! Some of the coolest features are the ability to modularize components.

This website is built with a [React Router](https://reacttraining.com/react-router/web/guides/quick-start) and a Navbar, About, and Post Component. The post is where we render some markdown.

```js
<div className="h-full overflow-scroll prose prose-invert flex flex-col max-w-3xl mx-auto">
  {
    postHTML === '' ?
      <div className="text-center">
        <p className="text-3xl font-semibold">Loading...</p>
      </div>
      :
      <ReactMarkdown>
        {postHTML}
      </ReactMarkdown>
  }
</div>
```

For all of the styles I use [tailwindcss](https://tailwindcss.com/), and as a compiler I use [vite](https://vite.js/).
