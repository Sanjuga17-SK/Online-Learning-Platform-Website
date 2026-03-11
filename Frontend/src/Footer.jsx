import React from 'react';
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-[#bc28db] to-[#ff2b5a] pt-12 pb-16 px-4 sm:px-8 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 pt-4">

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-[17px] font-bold mb-6">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                                <span className="text-[13px] leading-relaxed">
                                    9/40, EVR St, Balasamudram, TamilNadu, 621203.
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="w-4 h-4 flex-shrink-0" />
                                <span className="text-[13px]">+91 9944889324</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                <span className="text-[13px]">hello@nextfence.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="md:justify-self-center">
                        <h3 className="text-[17px] font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-[13px] hover:underline">Home</a></li>
                            <li><a href="#" className="text-[13px] hover:underline">About Us</a></li>
                            <li><a href="#" className="text-[13px] hover:underline">Courses</a></li>
                            <li><a href="#" className="text-[13px] hover:underline">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Subscribe Newsletter */}
                    <div>
                        <h3 className="text-[17px] font-bold mb-6">Subscribe Newsletter</h3>
                        <p className="text-[13px] leading-relaxed mb-8">
                            "Stay ahead with the Latest course, tips, and industry insights delivered straight to your inbox"
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#ff2b5a] hover:scale-110 transition-transform shadow-md">
                                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.115.549 4.17 1.593 5.996L.48 24l6.115-1.604c1.782 1.002 3.791 1.531 5.86 1.531 6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm0 21.942c-1.802 0-3.564-.485-5.11-1.401l-.367-.218-3.793 1.002 1.006-3.715-.24-.38a9.927 9.927 0 0 1-1.523-5.263c0-5.541 4.512-10.053 10.052-10.053 5.541 0 10.053 4.512 10.053 10.053 0 5.54-4.512 10.053-10.053 10.053zm5.492-7.512c-.302-.15-1.785-.88-2.062-.981-.277-.101-.48-.15-.681.15-.202.302-.782.982-.958 1.183-.176.201-.352.226-.654.075-.302-.15-1.275-.47-2.428-1.5-.898-.802-1.503-1.792-1.68-2.093-.175-.302-.019-.464.132-.614.136-.135.302-.352.453-.528.151-.176.201-.302.302-.503.101-.202.05-.378-.025-.528-.076-.15-.681-1.643-.933-2.247-.245-.59-.496-.51-.681-.52-.176-.008-.378-.008-.579-.008-.202 0-.528.075-.805.378-.277.302-1.057 1.033-1.057 2.518s1.082 2.919 1.233 3.12c.15.202 2.128 3.248 5.155 4.555.72.311 1.282.497 1.722.636.724.229 1.385.197 1.905.118.579-.088 1.785-.73 2.037-1.435.252-.705.252-1.309.176-1.435-.075-.126-.276-.202-.578-.352z" /></svg>
                            </a>
                            <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#ff2b5a] hover:scale-110 transition-transform shadow-md">
                                <Facebook className="w-[18px] h-[18px] fill-currentColor" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#ff2b5a] hover:scale-110 transition-transform shadow-md">
                                <svg className="w-[14px] h-[14px] ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
