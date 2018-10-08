class ProductionsController < ApplicationController
  skip_before_action :authenticate_user!
  before_action :set_production, only: [:show, :edit, :update ]

  def index
    @productions = Production.all || []
    @labels = Label.all || []
  end

  def show
  end

  def edit
  end

  def update
    @production.update(production_params)
    redirect_to production_path(@production)
  end

  private

  def production_params
    params.require(:production).permit(:title, :photo)
  end

  def set_production
    @production = Production.find(params[:id])
  end

end
