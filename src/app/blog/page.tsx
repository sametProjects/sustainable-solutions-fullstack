import BlogTab from "@/components/blog/BlogTab";
import Card from "@/components/ui/Card";

const Blog: React.FC = () => {
  return (
    <div>
      <BlogTab />
      <div className="grid gap-4 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card title="Ev için güneş enerjisi sistemleri" description="Lorem ipsun dolor sit amet" icon="enerji" />
        <Card title="Yağmur suyu toplama ve filtreleme sistemleri" description="Lorem ipsun dolor sit amet" icon="su" />
        <Card title="Sıfır atık yaşam rehberleri" description="Lorem ipsun dolor sit amet" icon="atik" />
        <Card title="Balkon ve teras bahçeciliği" description="Lorem ipsun dolor sit amet" icon="gida" />
        <Card title="Elektrikli ulaşım araçları" description="Lorem ipsun dolor sit amet" icon="ulasim" />
        <Card title="Aşırı hava olaylarına hazırlık" description="Lorem ipsun dolor sit amet" icon="iklim" />
      </div>
    </div>
  );
};

export default Blog;
