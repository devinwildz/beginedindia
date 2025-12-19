import React from 'react'

const page = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-linear-to-br from-[#2b5e5e]/5 to-[#f59e0b]/5 py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <Badge className="mb-6 bg-[#2b5e5e]/10 text-[#2b5e5e] font-medium">
                        Our Certification Programs
                    </Badge>
                    <h1 className="text-5xl md:text-6xl font-bold text-[#2b5e5e] mb-6">
                        Choose Your Lactation Journey
                    </h1>
                    <p className="text-xl text-[#527a7a] max-w-3xl mx-auto">
                        Internationally recognized, LEAARC-approved courses designed to empower you at every stage of your lactation career.
                    </p>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="py-20 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid gap-12 lg:gap-16">
                        {courses.map((course, index) => (
                            <div
                                key={course.id}
                                className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${index % 2 === 1 ? 'md:[&>div:nth-child(1)]:order-2' : ''
                                    } bg-white rounded-3xl shadow-xl overflow-hidden`}
                            >
                                {/* Image Side */}
                                <div className="relative h-80 md:h-full overflow-hidden group">
                                    <Image
                                        src={course.image}
                                        fill
                                        alt={course.title}
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

                                    {/* Badges on Image */}
                                    <div className="absolute top-6 left-6">
                                        <Badge className="bg-white/95 text-[#2b5e5e] font-bold shadow-lg">
                                            {course.hours}
                                        </Badge>
                                    </div>
                                    <div className="absolute top-6 right-6">
                                        <Badge variant="secondary" className="bg-white/95 text-[#527a7a]">
                                            {course.level}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="p-10 lg:p-14">
                                    <h2 className="text-4xl md:text-5xl font-bold text-[#2b5e5e] mb-4">
                                        {course.title}
                                    </h2>
                                    <p className="text-xl text-[#2b5e5e] font-medium mb-6">
                                        {course.subtitle}
                                    </p>
                                    <p className="text-[#527a7a] text-lg leading-relaxed mb-10">
                                        {course.description}
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-5 mb-12">
                                        {course.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#2b5e5e]/10 flex items-center justify-center shrink-0">
                                                    <Check className="w-5 h-5 text-[#2b5e5e]" />
                                                </div>
                                                <span className="text-[#527a7a] text-base">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button - ShadCN */}
                                    <Button size="lg" className="bg-[#2b5e5e] hover:bg-[#1e4444] text-white font-medium px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                                        {course.buttonText}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#2b5e5e]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Begin Your Journey?
                    </h2>
                    <p className="text-xl text-white/90 mb-10">
                        Join thousands of lactation professionals trained by Begin Ed India.
                    </p>
                    <Button size="lg" variant="secondary" className="bg-white text-[#2b5e5e] hover:bg-gray-100 font-semibold px-10 py-6 rounded-full">
                        View All Courses
                    </Button>
                </div>
            </section>
        </>
    )
}

export default page