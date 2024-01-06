type Props = {
  promise: Promise<Post[]>;
};

export default async function UserPosts({ promise }: Props) {
  const posts = await promise;

  const content = (
    <section>
      {posts?.map((post) => {
        return (
          <div key={post?.id}>
            <h2 className="text-lg font-bold mb-5">{post?.title}</h2>
            <p>{post?.body}</p>
          </div>
        );
      })}
    </section>
  );
  return content;
}
