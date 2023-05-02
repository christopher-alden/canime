import video from '../lib/components/assets/announcement.mp4'

export default function Error() {
    return (
<main className="grid h-screen place-items-center bg-gradient-to-br from-orange-500 to-orange-400 px-6 py-24 sm:py-32 lg:px-8">

        <div className="text-center">
          <p className="text-base font-semibold text-white">404</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-white">Uh oh, you encontered a problem, we're fixing it right now!</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-d-accent shadow-sm hover:bg-d-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d-primary">
              Go back home
            </a>
          </div>
        </div>
        <video
        //fix expired link
        src={video}
        controls={false}
        autoPlay={true}
        width='100%'
        height='100%'
        className="hidden"
      />
      </main>

    );
  }
  