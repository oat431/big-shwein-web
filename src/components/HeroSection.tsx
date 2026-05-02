import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Big Shwein</h1>
                    <p className="py-6">
                        Normal Ledger Application for Personal Finance Management. This application is designed
                        to help you manage your personal finances effectively and efficiently. With Big Shwein,
                        you can easily track your income, expenses, and savings, allowing you to make informed
                        financial decisions and achieve your financial goals.
                    </p>
                    <Link to="/register" className="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;