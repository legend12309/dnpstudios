import { Team } from '../components/Team'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export function TeamPage() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20"> {/* Add padding top to account for fixed navbar */}
                <Team />
            </main>
            <Footer />
        </div>
    )
}
