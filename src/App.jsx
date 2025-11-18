import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import VoiceWidget from './components/VoiceWidget';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <PracticeAreas />
        {/* Placeholder for team & consultation sections */}
        <section id="consult" className="bg-slate-950 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-white text-2xl font-semibold">Book a consultation</h3>
              <p className="mt-2 text-slate-300 max-w-2xl">Leave your details and preferred time. We’ll get back within one business day.</p>
              <form className="mt-6 grid md:grid-cols-2 gap-4">
                <input required placeholder="Full name" className="px-4 py-3 rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-500" />
                <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-500" />
                <input placeholder="Phone (optional)" className="px-4 py-3 rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-500" />
                <select className="px-4 py-3 rounded-xl bg-slate-900/70 border border-white/10 text-white">
                  <option>15-minute call</option>
                  <option>30-minute meeting</option>
                </select>
                <textarea placeholder="Briefly describe your matter" className="md:col-span-2 px-4 py-3 rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-500" rows="4" />
                <button type="button" className="md:col-span-2 mt-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-medium w-fit">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <VoiceWidget />
      <Footer />
    </div>
  );
}

export default App;
