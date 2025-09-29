import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  let createdPost: Post;
  let createdPostId: string;
  let foundPost: Post | undefined;

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });

    createdPost = postsService.create(post);
    createdPostId = createdPost.id;

    foundPost = postsService.find(createdPostId);
  });

  it('should add a new post', () => {
    expect(createdPost).toBeDefined();

    expect(createdPost?.id).toBeDefined();
    expect(createdPost?.text).toBeDefined();
    expect(createdPost?.date).toBeDefined();

    expect(foundPost).toBeDefined();

  });

  it('should find a post', () => {
    expect(foundPost).toBeDefined();

    expect(foundPost?.id).toBeDefined();
    expect(foundPost?.text).toBeDefined();

    expect(foundPost?.id).toEqual(createdPostId);
    expect(foundPost?.text).toEqual(post.text);
  });
});
