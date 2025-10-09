"use client";
import { Title } from "@/components/Title";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import Shape from "@/components/Shape";

export default function ContactPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="contact" className="min-h-screen bg-gray-900 py-20 px-4">
        <Shape />
      <div className="container mx-auto my-24">
        <div
          className="grid md:grid-cols-2 items-center gap-12"
          data-aos="fade-up"
        >
          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-gray-900/90 backdrop-blur-md ">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">
                Me contacter
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-white text-xl"
                    />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <Link
                      href="mailto:nandry556@gmail.com"
                      className="text-cyan-400 hover:text-emerald-400 transition-colors"
                    >
                      nandry556@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-white text-xl"
                    />
                  </div>
                  <div>
                    <p className="text-gray-300">Téléphone</p>
                    <Link
                      href="tel:+261346055929"
                      className="text-cyan-400 hover:text-emerald-400 transition-colors"
                    >
                      +261 34 60 559 29
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-white text-xl"
                    />
                  </div>
                  <div>
                    <p className="text-gray-300">Adresse</p>
                    <p className="text-cyan-400">
                      Andohanimandroseza Antananarivo, Madagascar
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Link
                  href="http://github.com/benandry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-cyan-500/20 transition-colors"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-2xl text-gray-300"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/herinandrianina-randriamihaingo-566007254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-cyan-500/20 transition-colors"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-2xl text-gray-300"
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/nandry.multiplix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-cyan-500/20 transition-colors"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-2xl text-gray-300"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="p-6 rounded-2xl bg-gray-900/90 backdrop-blur-md border border-emerald-500/20">
            <form className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  id="fullName"
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="votre nom "
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Votre adresse email..."
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <Link
                href="#"
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-emerald-600 transition-all flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                Envoyer le message
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
