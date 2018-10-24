module ApplicationHelper
  def home?
    controller_name == 'pages' && action_name == 'home'
  end
end
