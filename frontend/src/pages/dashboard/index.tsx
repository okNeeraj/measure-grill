const CruxReport = () => {
  const report = {
    record: {
      key: { url: 'https://google.com/' },
      metrics: {
        first_contentful_paint: {
          histogram: [
            { start: 0, end: 1800, density: 0.613 },
            { start: 1800, end: 3000, density: 0.2107 },
            { start: 3000, density: 0.1763 },
          ],
          percentiles: { p75: 2626 },
        },
        first_input_delay: {
          histogram: [
            { start: 0, end: 100, density: 0.9938 },
            { start: 100, end: 300 },
            { start: 300, density: 0.0062 },
          ],
          percentiles: { p75: 2 },
        },
        interaction_to_next_paint: {
          histogram: [
            { start: 0, end: 200, density: 0.9725 },
            { start: 200, end: 500, density: 0.0208 },
            { start: 500, density: 0.0067 },
          ],
          percentiles: { p75: 23 },
        },
        largest_contentful_paint: {
          histogram: [
            { start: 0, end: 2500, density: 0.7381 },
            { start: 2500, end: 4000, density: 0.1628 },
            { start: 4000, density: 0.0991 },
          ],
          percentiles: { p75: 2790 },
        },
        cumulative_layout_shift: {
          histogram: [
            { start: '0.00', end: '0.10', density: 0.9937 },
            { start: '0.10', end: '0.25', density: 0.0032 },
            { start: '0.25', density: 0.0031 },
          ],
          percentiles: { p75: '0.00' },
        },
        experimental_time_to_first_byte: {
          histogram: [
            { start: 0, end: 800, density: 0.5881 },
            { start: 800, end: 1800, density: 0.241 },
            { start: 1800, density: 0.171 },
          ],
          percentiles: { p75: 1403 },
        },
      },
      collectionPeriod: {
        firstDate: { year: 2024, month: 7, day: 12 },
        lastDate: { year: 2024, month: 8, day: 8 },
      },
    },
    urlNormalizationDetails: {
      originalUrl: 'https://google.com',
      normalizedUrl: 'https://google.com/',
    },
  }

  if (!report || !report.record) return <p>No data available</p>

  const { url } = report.record.key
  const {
    first_contentful_paint,
    first_input_delay,
    interaction_to_next_paint,
    largest_contentful_paint,
    cumulative_layout_shift,
    experimental_time_to_first_byte,
  } = report.record.metrics

  const renderHistogram = (histogram) => {
    return (
      <ul>
        {histogram.map((bucket, index) => (
          <li key={index}>
            {bucket.start} - {bucket.end ? bucket.end : '+'}: {bucket.density}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      <h2>CrUX Report for {url}</h2>

      <h3>First Contentful Paint</h3>
      <p>75th Percentile: {first_contentful_paint.percentiles.p75} ms</p>
      {renderHistogram(first_contentful_paint.histogram)}

      <h3>First Input Delay</h3>
      <p>75th Percentile: {first_input_delay.percentiles.p75} ms</p>
      {renderHistogram(first_input_delay.histogram)}

      <h3>Interaction to Next Paint</h3>
      <p>75th Percentile: {interaction_to_next_paint.percentiles.p75} ms</p>
      {renderHistogram(interaction_to_next_paint.histogram)}

      <h3>Largest Contentful Paint</h3>
      <p>75th Percentile: {largest_contentful_paint.percentiles.p75} ms</p>
      {renderHistogram(largest_contentful_paint.histogram)}

      <h3>Cumulative Layout Shift</h3>
      <p>75th Percentile: {cumulative_layout_shift.percentiles.p75}</p>
      {renderHistogram(cumulative_layout_shift.histogram)}

      <h3>Experimental Time to First Byte</h3>
      <p>75th Percentile: {experimental_time_to_first_byte.percentiles.p75} ms</p>
      {renderHistogram(experimental_time_to_first_byte.histogram)}
    </div>
  )
}

const Dashboard = () => {
  return (
    <>
      <div className="text-center mb-4">
        <h1 className="ff text-[38px] mb-4">Dashboard</h1>
        <div className="flex justify-center">
          Dashboard Page Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, vero. Molestiae nulla maxime dignissimos soluta alias est, nobis
          libero beatae perferendis deleniti dolores non saepe magnam tenetur quaerat facilis quasi.
        </div>
        <CruxReport />
      </div>
    </>
  )
}

export default Dashboard
