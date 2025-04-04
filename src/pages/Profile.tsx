import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useSocialStore } from '../store/socialStore';
import { User, Post } from '../types';
import { MessageSquare, UserPlus, UserMinus, Github, Linkedin, Twitter } from 'lucide-react';

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user: currentUser } = useAuthStore();
  const { posts, users, addConnection, removeConnection } = useSocialStore();

  const user = users.find((u) => u.id === id) as User;
  const userPosts = posts.filter((post) => post.userId === id);
  const isConnected = currentUser?.connections.includes(id || '');

  const handleConnect = () => {
    if (currentUser && id) {
      if (isConnected) {
        removeConnection(currentUser.id, id);
      } else {
        addConnection(currentUser.id, id);
      }
    }
  };

  if (!user) return <div>User not found</div>;

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
        <div className="px-6 py-4 relative">
          <div className="absolute -top-16 left-6">
            <img
              src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}`}
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-white"
            />
          </div>
          <div className="mt-16">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-gray-600">{user.role}</p>
              </div>
              <div className="flex space-x-4">
                {currentUser?.id !== id && (
                  <>
                    <button
                      onClick={handleConnect}
                      className={`flex items-center px-4 py-2 rounded-md ${
                        isConnected
                          ? 'bg-red-100 text-red-600 hover:bg-red-200'
                          : 'bg-indigo-600 text-white hover:bg-indigo-700'
                      }`}
                    >
                      {isConnected ? (
                        <>
                          <UserMinus className="w-5 h-5 mr-2" />
                          Disconnect
                        </>
                      ) : (
                        <>
                          <UserPlus className="w-5 h-5 mr-2" />
                          Connect
                        </>
                      )}
                    </button>
                    <button className="flex items-center px-4 py-2 bg-indigo-100 text-indigo-600 rounded-md hover:bg-indigo-200">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Message
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold">About</h2>
              <p className="mt-2 text-gray-600">{user.bio || 'No bio available'}</p>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold">Details</h2>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Department</p>
                  <p className="text-gray-900">{user.department || 'Not specified'}</p>
                </div>
                {user.role === 'student' && (
                  <div>
                    <p className="text-sm text-gray-500">Year of Study</p>
                    <p className="text-gray-900">{user.yearOfStudy || 'Not specified'}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold">Interests</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {user.interests?.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold">Social Links</h2>
              <div className="mt-2 flex space-x-4">
                {user.socialLinks?.github && (
                  <a
                    href={user.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                )}
                {user.socialLinks?.linkedin && (
                  <a
                    href={user.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                )}
                {user.socialLinks?.twitter && (
                  <a
                    href={user.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Posts</h2>
        <div className="space-y-6">
          {userPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}`}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(post.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <p className="text-gray-800">{post.content}</p>
              {post.attachments && post.attachments.length > 0 && (
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {post.attachments.map((attachment) => (
                    <img
                      key={attachment}
                      src={attachment}
                      alt="Post attachment"
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  ))}
                </div>
              )}
              <div className="mt-4 flex items-center space-x-4 text-gray-500">
                <button className="flex items-center space-x-1">
                  <span>{post.likes.length} likes</span>
                </button>
                <button className="flex items-center space-x-1">
                  <span>{post.comments.length} comments</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;