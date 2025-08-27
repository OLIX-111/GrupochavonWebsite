import ContactSection from "@/components/contacts/ContactSection";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default function ContactsPage() {
    return (
        <main className="pt-16">
            <Header/>
            <ContactSection />
            <Footer/>
        </main>
    );
}
