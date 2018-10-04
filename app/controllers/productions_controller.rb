class ProductionsController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    @productions = Production.all || []
    @labels = Label.all || []
  end

end
