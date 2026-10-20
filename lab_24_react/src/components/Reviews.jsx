import { useEffect, useState } from 'react';

const VARIANT_NUMBER = 20;
const REVIEWS_URL = `https://jsonplaceholder.typicode.com/posts/${VARIANT_NUMBER}/comments`;

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        async function loadReviews() {
            try {
                setLoading(true);
                setError('');
                const response = await fetch(REVIEWS_URL, { signal: controller.signal });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const data = await response.json();
                setReviews(data);
            } catch (err) {
                if (err.name !== 'AbortError') setError('Не вдалося завантажити відгуки. Спробуйте оновити сторінку.');
            } finally {
                if (!controller.signal.aborted) setLoading(false);
            }
        }

        loadReviews();
        return () => controller.abort();
    }, []);

    return (
        <section className="content-card rounded-2xl border p-6 shadow-sm sm:p-8">
            <h2 className="section-heading mb-5 border-b pb-3 text-2xl font-bold">Reviews</h2>
            {loading && <p role="status">Завантаження відгуків…</p>}
            {error && <p role="alert" className="text-red-600">{error}</p>}
            {!loading && !error && (
                <div className="grid gap-4 md:grid-cols-2">
                    {reviews.map((review) => (
                        <article key={review.id} className="review-card rounded-xl border p-4">
                            <h3 className="mb-1 font-semibold">{review.name}</h3>
                            <p className="mb-3 text-sm opacity-75">{review.email}</p>
                            <p className="leading-relaxed">{review.body}</p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Reviews;
